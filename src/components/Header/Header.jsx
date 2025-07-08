import SearchForm from "../SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import "./Header.css";

function Header({
  isLoggedIn,
  onRegisterClick,
  onSignOut,
  onSearch,
  isSavedPage,
}) {
  return (
    <header className={`header ${isSavedPage ? "header_saved" : ""}`}>
      <Navigation
        isLoggedIn={isLoggedIn}
        onRegisterClick={onRegisterClick}
        onSignOut={onSignOut}
      />
      <HamburgerMenu
        isLoggedIn={isLoggedIn}
        onSignOut={onSignOut}
        onRegisterClick={onRegisterClick}
      />
      {location.pathname === "/" ? <SearchForm onSearch={onSearch} /> : ""}
    </header>
  );
}

export default Header;
