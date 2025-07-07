import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <p className="footer__paragraph">
        &copy;2025 Supersite,Powered by News API
      </p>
      <ul className="footer__links">
        <li>
          <Link to="/" className="footer__home-link">
            Home
          </Link>
        </li>
        <li>TripleTen</li>
        <li>Github</li>
      </ul>
    </footer>
  );
}

export default Footer;
