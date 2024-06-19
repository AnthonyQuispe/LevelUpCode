import React from "react";
import "./QuestNav.scss";
import closeIcon from "../../assets/icons/CloseIcon.png";
import { Link } from "react-router-dom";

export default function QuestNav({ openAiChat }) {
  return (
    <nav className="quest-nav">
      <Link className="quest-nav__button" to="/">
        <img src={closeIcon} alt="Close Icon" className="quest-nav__img" />
      </Link>
      <div className="quest-nav__progress-bar">
        <div className="quest-nav__progress-bar-inside--25" />
      </div>
    </nav>
  );
}
