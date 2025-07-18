import { useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { fetchNewsWithKeyword } from "../../utils/api";
import { checkToken, register, login } from "../../utils/auth";
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

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleRegister = async (data) => {
    try {
      const res = await register(data);
      setActiveModal("success");
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogin = async (data) => {
    const res = await login(data);
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

  const handleSearch = async (keyword) => {
    setIsLoading(true);
    setError("");
    setHasSearched(true);

    try {
      const articles = await fetchNewsWithKeyword(keyword);

      if (articles.length > 0) {
        setArticles(articles);
      } else {
        setArticles([]);
      }
    } catch (err) {
      console.error("Search error:", err);
      setError(
        "Sorry, something went wrong during the request. Please try again later."
      );
      setArticles([]);
    } finally {
      setIsLoading(false);
    }
  };

  const isArticleSaved = (article) => {
    return savedArticles.some((saved) => saved.url === article.url);
  };

  const handleSaveArticle = (article) => {
    if (!isLoggedIn) return;

    if (isArticleSaved(article)) return;

    const updatedArticles = [...savedArticles, article];
    setSavedArticles(updatedArticles);

    localStorage.setItem("savedArticles", JSON.stringify(updatedArticles));
    console.log("Saved to localStorage:", updatedArticles);
  };

  const handleDeleteArticle = (articleToDelete) => {
    setSavedArticles((prevArticles) =>
      prevArticles.filter((article) => article.url !== articleToDelete.url)
    );
  };

  const location = useLocation();
  const isSavedPage = location.pathname === "/saved-articles";

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="page">
        <div className="page__content">
          <Header
            isLoggedIn={isLoggedIn}
            onLoginClick={openLoginModal}
            onSignOut={handleSignOut}
            onSearch={handleSearch}
            isSavedPage={isSavedPage}
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
                  setIsLoading={setIsLoading}
                  hasSearched={hasSearched}
                  savedArticles={savedArticles}
                  isArticleSaved={isArticleSaved}
                  setSavedArticles={setSavedArticles}
                  error={error}
                  onSave={handleSaveArticle}
                />
              }
            ></Route>

            <Route
              path="/saved-articles"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedArticles
                    savedArticles={savedArticles}
                    setSavedArticles={setSavedArticles}
                    isArticleSaved={isArticleSaved}
                    isSavedPage={isSavedPage}
                    isLoggedIn={isLoggedIn}
                    onDelete={handleDeleteArticle}
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

          <SuccessPopUp
            isOpen={activeModal === "success"}
            onClose={closeActiveModal}
            onLoginClick={openLoginModal}
          />

          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
