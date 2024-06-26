import React from "react";
import "./QuestNav.scss";
import closeIcon from "../../assets/icons/CloseIcon.png";
import { Link, useLocation } from "react-router-dom";

export default function QuestNav() {
  const location = useLocation();

  // Extract the question number from the URL
  const questionNumber = location.pathname.match(/question\/(\d+)/)[1];

  // Determine the appropriate class name based on the question number
  let progressBarClass = "quest-nav__progress-bar-inside--0";
  if (questionNumber === "1") {
    progressBarClass = "quest-nav__progress-bar-inside--0";
  } else if (questionNumber === "2") {
    progressBarClass = "quest-nav__progress-bar-inside--25";
  } else if (questionNumber === "3") {
    progressBarClass = "quest-nav__progress-bar-inside--50";
  } else if (questionNumber === "4") {
    progressBarClass = "quest-nav__progress-bar-inside--75";
  } else if (questionNumber === "5") {
    progressBarClass = "quest-nav__progress-bar-inside--100";
  }

  return (
    <nav className="quest-nav">
      <Link className="quest-nav__button" to="/">
        <img src={closeIcon} alt="Close Icon" className="quest-nav__img" />
      </Link>
      <div className="quest-nav__progress-bar">
        <div className={progressBarClass} />
      </div>
    </nav>
  );
}
