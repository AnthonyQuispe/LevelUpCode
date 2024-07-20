import React from "react";
import "./DashboardNav.scss";
import { Link } from "react-router-dom";
import profileIcon from "../../assets/icons/ProfileIcon.svg";
import leaderboardIcon from "../../assets/icons/LeaderboardIcon.png";
import homeIcon from "../../assets/icons/HomeIcon.svg";
import settingIcon from "../../assets/icons/SettingIcon.svg";

export default function DashboardNav() {
  return (
    <nav className="dashboard-nav">
      <Link className="dashboard-nav__button" to="/dashboard">
        <img className="dashboard-nav__icons" src={homeIcon} alt="Home Icon" />
        <p className="dashboard-nav__text">Home </p>
      </Link>
      <Link className="dashboard-nav__button" to="/leaderboard">
        <img
          className="dashboard-nav__icons"
          src={leaderboardIcon}
          alt="Leaderboard Icon"
        />
        <p className="dashboard-nav__text">Leaderboard </p>
      </Link>
      <Link className="dashboard-nav__button" to="/setting">
        <img
          className="dashboard-nav__icons"
          src={settingIcon}
          alt="Setting Icon"
        />
        <p className="dashboard-nav__text">Setting </p>
      </Link>
      <Link className="dashboard-nav__button" to="/profile">
        <img
          className="dashboard-nav__icons"
          src={profileIcon}
          alt="Profile Icon"
        />
        <p className="dashboard-nav__text">Profile </p>
      </Link>
    </nav>
  );
}
