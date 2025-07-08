import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import LogoutLight from "../../assets/logout-light.svg";
import "./HamburgerMenu.css";

function HamburgerMenu({
  isLoggedIn,
  onSignOut,
  onRegisterClick,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  isSavedPage,
}) {
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const { currentUser } = useContext(CurrentUserContext);

  const handleLogout = () => {
    onSignOut();
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="hamburger__container">
      <button
        className={`hamburger__icon ${
          isSavedPage ? "hamburger__icon_dark" : ""
        }`}
        onClick={toggleMenu}
      >
        {isMobileMenuOpen ? "✕" : "☰"}
      </button>
      {isMobileMenuOpen && (
        <nav className="hamburger__menu">
          {isLoggedIn ? (
            <ul className="hamburger__link-container">
              <li>
                <Link
                  to="/"
                  className="hamburger__link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <p>Home</p>
                </Link>
              </li>

              <li>
                <Link
                  to="/saved-articles"
                  className="hamburger__link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <p>Saved articles</p>
                </Link>
              </li>

              <li>
                <button className="hamburger__logout" onClick={handleLogout}>
                  Lily
                  <img
                    src={LogoutLight}
                    alt="logout icon"
                    className="hamburger__logout-icon"
                  />
                </button>
              </li>
            </ul>
          ) : (
            <ul className="hamburger__link-container">
              <li className="hamburger__link">
                <p>Home</p>
              </li>

              <li>
                <button
                  className="hamburger__login"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onRegisterClick();
                  }}
                >
                  Sign In
                </button>
              </li>
            </ul>
          )}
        </nav>
      )}
    </div>
  );
}

export default HamburgerMenu;
