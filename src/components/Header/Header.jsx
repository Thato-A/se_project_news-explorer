import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
import LogOut from "../../assets/logout.svg";
import { Link } from "react-router-dom";

function Header({ isLoggedIn, onRegisterClick, onSignOut }) {
  return (
    <header className="header">
      <div className="header__container">
        <p className="header__logo">NewsExplorer</p>

        <nav className="header__nav">
          {isLoggedIn ? (
            <ul className="header__nav-container">
              <li className="header__nav-home-link">
                <Link to="/">
                  <p>Home</p>
                </Link>
              </li>

              <li>
                <Link to="/saved-articles" className="header__nav-news-link">
                  <p>Saved articles</p>
                </Link>
              </li>

              <li>
                <button className="header__nav-logout" onClick={onSignOut}>
                  Lily
                  <img
                    src={LogOut}
                    alt="logout icon"
                    className="header__nav-icon"
                  />
                </button>
              </li>
            </ul>
          ) : (
            <ul className="header__nav-container">
              <li className="header__nav-home-link">
                <p>Home</p>
              </li>

              <li>
                <button className="header__nav-btn" onClick={onRegisterClick}>
                  Sign In
                </button>
              </li>
            </ul>
          )}
        </nav>
      </div>

      {/* <SearchForm /> */}
    </header>
  );
}

export default Header;
