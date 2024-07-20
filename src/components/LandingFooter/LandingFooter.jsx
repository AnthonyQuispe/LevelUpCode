import "./LandingFooter.scss";
import { Link } from "react-router-dom";

export default function LandingFooter() {
  return (
    <footer className="footer">
      <div className="footer__containers">
        <div className="footer__container">
          <h3 className="footer__title">About Us</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <Link className="footer__link">Courses</Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link">Mission</Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link">Team</Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer__container">
          <h3 className="footer__title">Help and Support</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <Link className="footer__link">Download</Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link">LevelUp-Code FAQs</Link>
            </li>
          </ul>
        </div>
        <div className="footer__container">
          <h3 className="footer__title">Privacy and Terms</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <Link className="footer__link">Community Guidelines</Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" to={"/terms"}>
                Terms
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link">Privacy</Link>
            </li>
          </ul>
        </div>
        <div className="footer__container">
          <h3 className="footer__title">Social</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="https://anthonyquispe.com/" className="footer__link">
                Creator
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://github.com/AnthonyQuispe"
                className="footer__link"
              >
                GitHub
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://www.linkedin.com/in/anthonyqs/"
                className="footer__link"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
