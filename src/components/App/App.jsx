import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedArticles from "../SavedArticles/SavedArticles";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);

  const openLoginModal = () => {
    setActiveModal("login");
  };

  const openRegistrationModal = () => {
    setActiveModal("register");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const navigate = useNavigate();

  const handleSignOut = () => {
    setCurrentUser("");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="page">
        <div className="page__content">
          <Header
            isLoggedIn={isLoggedIn}
            onRegisterClick={openRegistrationModal}
            onSignOut={handleSignOut}
          />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  isLoggedIn={isLoggedIn}
                  articles={articles}
                  setArticles={setArticles}
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
          />

          <LoginModal
            isOpen={activeModal === "login"}
            onLoginClick={openLoginModal}
            onRegisterClick={openRegistrationModal}
            onClose={closeActiveModal}
          />

          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
