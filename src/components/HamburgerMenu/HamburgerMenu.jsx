import { useContext } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import LogoutLight from "../../assets/logout-light.svg";
import "./HamburgerMenu.css";

function HamburgerMenu({
  isLoggedIn,
  onSignOut,
  onLoginClick,
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
    <div className={`hamburger ${isMobileMenuOpen ? "hamburger--open" : ""}`}>
      <div className="hamburger__container">
        <button
          className={`hamburger__icon ${
            isSavedPage ? "hamburger__icon_dark" : ""
          } ${isSavedPage && isMobileMenuOpen ? "hamburger__icon_light" : ""}`}
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
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/saved-articles"
                    className="hamburger__link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Saved articles
                  </Link>
                </li>

                <li>
                  <button className="hamburger__logout" onClick={handleLogout}>
                    {currentUser.username}
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
                      onLoginClick();
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
      {isMobileMenuOpen && (
        <div className="hamburger__overlay" onClick={toggleMenu}></div>
      )}
    </div>
  );
}

export default HamburgerMenu;
