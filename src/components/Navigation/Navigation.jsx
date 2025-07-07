import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoutLight from "../../assets/logout-light.svg";
import LogoutDark from "../../assets/logout.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Navigation.css";

function Navigation({ isLoggedIn, onRegisterClick, onSignOut }) {
  const { currentUser } = useContext(CurrentUserContext);
  const location = useLocation();
  const path = location.pathname;
  const isSavedPage = path === "/saved-articles";

  return (
    <div className="nav">
      <div
        className={`nav__container ${
          isSavedPage ? "nav__container_saved" : ""
        }`}
      >
        <p className={`nav__logo ${isSavedPage ? "nav_saved" : ""}`}>
          NewsExplorer
        </p>

        <nav className="nav__links">
          {isLoggedIn ? (
            <ul className="nav__link-container">
              <li>
                <Link
                  to="/"
                  className={`nav__link ${isSavedPage ? "nav_saved" : ""} ${
                    path === "/" ? "nav__link--active" : ""
                  }`}
                >
                  {" "}
                  <p>Home</p>
                </Link>
              </li>

              <li>
                <Link
                  to="/saved-articles"
                  className={`nav__link ${
                    isSavedPage ? "nav_saved nav__link--active" : ""
                  }`}
                >
                  <p> Saved articles </p>
                </Link>
              </li>

              <li>
                <button
                  className={`nav__logout ${
                    isSavedPage ? "nav__logout_saved" : ""
                  }`}
                  onClick={onSignOut}
                >
                  {currentUser?.username}
                  <img
                    src={isSavedPage ? LogoutDark : LogoutLight}
                    alt="logout icon"
                    className="nav__logout-icon"
                  />
                </button>
              </li>
            </ul>
          ) : (
            <ul className="nav__link-container">
              <li className="nav__link">
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
      </div>
    </div>
  );
}
export default Navigation;
