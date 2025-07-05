import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { fetchNews } from "../../utils/api";
import { checkToken } from "../../utils/auth";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedArticles from "../SavedArticles/SavedArticles";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import SuccessPopUp from "../SuccessModal/SuccessPopUp";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [error, setError] = useState("");

  const openLoginModal = () => {
    setActiveModal("login");
  };

  const openRegistrationModal = () => {
    setActiveModal("register");
  };

  const openSuccessPopUp = () => {
    setActiveModal("popup");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleRegister = async () => {
    const res = await register({ username, email, password });
    if (res.token) {
      const userData = await checkToken(res.token);
      setCurrentUser(userData);
      setIsLoggedIn(true);
      setActiveModal(openSuccessPopUp);
    }
  };

  const handleLogin = async () => {
    const res = await login({ email, password });
    if (res.token) {
      const userData = await checkToken(res.token);
      setCurrentUser(userData);
      setIsLoggedIn(true);
      closeActiveModal("");
    }
  };

  const navigate = useNavigate();

  const handleSignOut = () => {
    setCurrentUser("");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleSearch = async (url) => {
    setIsLoading(true);
    setError("");
    setHasSearched(true);

    try {
      const data = await fetchNews(url);

      if (data.articles && data.articles.length > 0) {
        setArticles(data.articles);
      } else {
        setArticles([]);
      }
    } catch (err) {
      setError(
        "Sorry, something went wrong during the request. Please try again later."
      );
      setArticles([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="page">
        <div className="page__content">
          <Header
            isLoggedIn={isLoggedIn}
            onRegisterClick={openRegistrationModal}
            onSignOut={handleSignOut}
            onSearch={handleSearch}
          />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  isLoggedIn={isLoggedIn}
                  articles={articles}
                  setArticles={setArticles}
                  isLoading={isLoading}
                  hasSearched={hasSearched}
                  error={error}
                />
              }
            ></Route>

            <Route
              path="/saved-articles"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedArticles
                    articles={articles}
                    savedArticles={savedArticles}
                    setSavedArticles={setSavedArticles}
                  />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>

          <RegisterModal
            isOpen={activeModal === "register"}
            onRegisterClick={openRegistrationModal}
            onLoginClick={openLoginModal}
            onClose={closeActiveModal}
            onSubmit={handleRegister}
          />

          <LoginModal
            isOpen={activeModal === "login"}
            onLoginClick={openLoginModal}
            onRegisterClick={openRegistrationModal}
            onClose={closeActiveModal}
            onSubmit={handleLogin}
          />

          <SuccessPopUp isOpen={activeModal === "popup"} />

          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
