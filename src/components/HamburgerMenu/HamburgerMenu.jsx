import { useState } from "react";
import "./HamburgerMenu.css";

function HamburgerMenu({ isLoggedIn, onSignOut, onRegisterClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

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
              <li className="hamburger__home-link">
                <Link to="/">
                  <p>Home</p>
                </Link>
              </li>

              <li>
                <Link to="/saved-articles" className="hamburger__news-link">
                  <p>Saved articles</p>
                </Link>
              </li>

              <li>
                <button className="hamburger__logout" onClick={handleLogout}>
                  {currentUser.name}
                  <img
                    src={LogOut}
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
