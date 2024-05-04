import { Link } from "react-router-dom";
import "./bottomNav.scss";
import profileIcon from "../../assets/icons/ProfileIcon.svg";
import glossaryIcon from "../../assets/icons/GlossaryIcon.svg";
import homeIcon from "../../assets/icons/HomeIcon.svg";
import settingIcon from "../../assets/icons/SettingIcon.svg";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <Link className="bottom-nav__button" to="/profile">
        <img
          className="bottom-nav__icons"
          src={profileIcon}
          alt="Profile Icon"
        />
      </Link>
      <Link className="bottom-nav__button" to="/">
        <img className="bottom-nav__icons" src={homeIcon} alt="Home Icon" />
      </Link>
      <Link className="bottom-nav__button" to="/glossary">
        <img
          className="bottom-nav__icons"
          src={glossaryIcon}
          alt="Glossary Icon"
        />
      </Link>
      <Link className="bottom-nav__button" to="/setting">
        <img
          className="bottom-nav__icons"
          src={settingIcon}
          alt="Setting Icon"
        />
      </Link>
    </nav>
  );
}
