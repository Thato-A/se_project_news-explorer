import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <div className="header__container">
        <p className="header__logo">NewsExplorer</p>

        <nav className="header__nav">
          {isLoggedIn ? (
            <ul className="header__nav-container">
              <li className="header__nav-home-link">
                <p>Home</p>
              </li>

              <li className="header__nav-news-link">
                <p>Saved articles</p>
              </li>

              <li>
                <button className="header__nav-btn">Lily</button>
              </li>
            </ul>
          ) : (
            <ul className="header__nav-container">
              <li className="header__nav-home-link">
                <p>Home</p>
              </li>

              <li>
                <button className="header__nav-btn">Sign In</button>
              </li>
            </ul>
          )}
        </nav>
      </div>

      <SearchForm />
    </header>
  );
}

export default Header;
