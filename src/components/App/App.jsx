import "./App.css";
import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedArticles from "../SavedArticles/SavedArticles";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const openLoginModal = () => {
    setActiveModal("login");
  };

  const openRegistrationModal = () => {
    setActiveModal("register");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="page">
        <div className="page__content">
          <Header
            isLoggedIn={isLoggedIn}
            onRegisterClick={openRegistrationModal}
          />

          <Routes>
            <Route path="/" element={<Main />}></Route>

            <Route
              path="/saved-articles"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedArticles />
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
