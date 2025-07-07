import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import LogoutLight from "../../assets/logout-light.svg";
import "./HamburgerMenu.css";

function HamburgerMenu({ isLoggedIn, onSignOut, onRegisterClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const { currentUser } = useContext(CurrentUserContext);

  const handleLogout = () => {
    onSignOut();
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="hamburger__container">
      <button className="hamburger__icon" onClick={toggleMenu}>
        ☰
      </button>
      {isMobileMenuOpen && (
        <nav className="hamburger__menu">
          {isLoggedIn ? (
            <ul className="hamburger__link-container">
              <li>
                <Link to="/" className="hamburger__link">
                  <p>Home</p>
                </Link>
              </li>

              <li>
                <Link to="/saved-articles" className="hamburger__link">
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
              <li className="hamburger__home-link">
                <p>Home</p>
              </li>

              <li>
                <button className="hamburger__login" onClick={onRegisterClick}>
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
