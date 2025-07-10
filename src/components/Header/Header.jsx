import { useState } from "react";
import { useLocation } from "react-router-dom";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      className={`header ${isSavedPage ? "header_saved" : ""}${
        isMobileMenuOpen ? "header_mobile-open" : ""
      }${isSavedPage && isMobileMenuOpen ? "header_saved-mobile" : ""}`}
    >
      <Navigation
        isLoggedIn={isLoggedIn}
        onRegisterClick={onRegisterClick}
        onSignOut={onSignOut}
      />
      <HamburgerMenu
        isLoggedIn={isLoggedIn}
        onSignOut={onSignOut}
        onRegisterClick={onRegisterClick}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isSavedPage={isSavedPage}
      />
      {location.pathname === "/" || "#/" ? (
        <SearchForm onSearch={onSearch} />
      ) : (
        ""
      )}
    </header>
  );
}

export default Header;
