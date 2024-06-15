import "./QuestNav.scss";
import closeIcon from "../../assets/icons/CloseIcon.png";
import LevelUpAiIcon from "../../assets/logo/LevelUpMasscot.svg";

export default function QuestNav({ openAiChat }) {
  return (
    <nav className="quest-nav">
      <button className="quest-nav__button">
        <img src={closeIcon} alt="Close Icon" className="quest-nav__img" />
      </button>
      <div className="quest-nav__progress-bar">
        <div className="quest-nav__progress-bar-inside--25" />
      </div>
      <button className="quest-nav__button" onClick={openAiChat}>
        <img
          src={LevelUpAiIcon}
          alt="Levelup Ai"
          className="quest-nav__img Quest-nav__img--ai"
        />
      </button>
    </nav>
  );
}
