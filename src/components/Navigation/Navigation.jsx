import { useState } from "react";
import { Link } from "react-router-dom";
import LogOut from "../../assets/logout.svg";
import "./Navigation.css";

function Navigation({ isLoggedIn, onRegisterClick, onSignOut }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="nav">
      <div className="nav__container">
        <p className="nav__logo">NewsExplorer</p>

        <nav className="nav__links">
          {isLoggedIn ? (
            <ul className="nav__link-container">
              <li className="nav__home-link">
                <Link to="/">
                  <p>Home</p>
                </Link>
              </li>

              <li>
                <Link to="/saved-articles" className="nav__news-link">
                  <p>Saved articles</p>
                </Link>
              </li>

              <li>
                <button className="nav__logout" onClick={onSignOut}>
                  Lily
                  <img
                    src={LogOut}
                    alt="logout icon"
                    className="nav__logout-icon"
                  />
                </button>
              </li>
            </ul>
          ) : (
            <ul className="nav__link-container">
              <li className="nav__home-link">
                <p>Home</p>
              </li>

              <li>
                <button className="nav__login" onClick={onRegisterClick}>
                  Sign In
                </button>
              </li>
            </ul>
          )}
        </nav>
        <button
          className="nav__hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        ></button>

        <div
          className={`nav__mobile-menu ${
            isMobileMenuOpen ? "nav__mobile-menu_opened" : ""
          }`}
        ></div>
      </div>
    </div>
  );
}
export default Navigation;
