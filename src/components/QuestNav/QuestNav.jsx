import "./QuestNav.scss";
import closeIcon from "../../assets/icons/CloseIcon.png";
import LevelUpAiIcon from "../../assets/logo/LevelUpMasscot.svg";
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
