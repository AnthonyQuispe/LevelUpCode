import "./nav.scss";
import { Link } from "react-router-dom";
import profileIcon from "../../assets/icons/ProfileIcon.svg";
import leaderboardIcon from "../../assets/icons/LeaderboardIcon.png";
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
      <Link className="nav__button" to="/leaderboard">
        <img
          className="nav__icons"
          src={leaderboardIcon}
          alt="Leaderboard Icon"
        />
        <p className="nav__text">Leaderboard </p>
      </Link>
      <Link className="nav__button" to="/setting">
        <img className="nav__icons" src={settingIcon} alt="Setting Icon" />
        <p className="nav__text">Setting </p>
      </Link>
    </nav>
  );
}
