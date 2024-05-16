import "./nav.scss";
import { Link } from "react-router-dom";
import profileIcon from "../../assets/icons/ProfileIcon.svg";
import glossaryIcon from "../../assets/icons/GlossaryIcon.svg";
import homeIcon from "../../assets/icons/HomeIcon.svg";
import settingIcon from "../../assets/icons/SettingIcon.svg";

export default function Nav() {
  return (
    <nav className="nav">
      <Link className="nav__button" to="/profile">
        <img className="nav__icons" src={profileIcon} alt="Profile Icon" />
        <p className="nav__text">Profile </p>
      </Link>
      <Link className="nav__button" to="/">
        <img className="nav__icons" src={homeIcon} alt="Home Icon" />
        <p className="nav__text">Home </p>
      </Link>
      <Link className="nav__button" to="/review">
        <img className="nav__icons" src={glossaryIcon} alt="Glossary Icon" />
        <p className="nav__text">Review </p>
      </Link>
      <Link className="nav__button" to="/setting">
        <img className="nav__icons" src={settingIcon} alt="Setting Icon" />
        <p className="nav__text">Setting </p>
      </Link>
    </nav>
  );
}
