import "./lessonNav.scss";
import closeIcon from "../../assets/icons/CloseIcon.png";
import LevelUpAi from "../../assets/logo/LevelUpMasscot.svg";

export default function LessonNav() {
  return (
    <nav className="lesson-nav">
      <button className="lesson-nav__button">
        <img src={closeIcon} alt="Close Icon" className="lesson-nav__img" />
      </button>
      <div className="lesson-nav__progress-bar">
        <div className="lesson-nav__progress-bar-inside--25" />
      </div>
      <button className="lesson-nav__button">
        <img
          src={LevelUpAi}
          alt="Levelup Ai"
          className="lesson-nav__img lesson-nav__img--ai"
        />
      </button>
    </nav>
  );
}
