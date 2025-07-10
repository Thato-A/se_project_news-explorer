import { Link } from "react-router-dom";
import Github from "../../assets/github.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <ul className="footer__links">
          <li>
            <Link to="/" className="footer__link">
              Home
            </Link>
          </li>
          <li>
            <a
              className="footer__link"
              href="https://tripleten.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              TripleTen
            </a>
          </li>
          <li>
            <a
              className="footer__link"
              href="https://github.com/Thato-A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Github} alt="GitHub" />
            </a>
          </li>
        </ul>
        <p className="footer__paragraph">
          &copy;2025 Supersite, Powered by News API
        </p>
      </div>
    </footer>
  );
}

export default Footer;
