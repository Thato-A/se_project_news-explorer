import { useLocation } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ isLoggedIn, onRegisterClick, onSignOut, onSearch }) {
  const location = useLocation();
  console.log(location);

  return (
    <header className="header">
      <Navigation
        isLoggedIn={isLoggedIn}
        onRegisterClick={onRegisterClick}
        onSignOut={onSignOut}
      />
      {location.pathname === "/" ? <SearchForm onSearch={onSearch} /> : ""}
    </header>
  );
}

export default Header;
