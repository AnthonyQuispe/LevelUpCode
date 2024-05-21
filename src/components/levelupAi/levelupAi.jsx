import "./levelupAi.scss";
import sendButton from "../../assets/icons/RightArrowIcon.svg";
import closeButton from "../../assets/icons/CloseIcon.png";
import levelupAi from "../../assets/logo/LevelupAi.png";

export default function LevelupAI({ openAiChat }) {
  return (
    <div className="levelup-ai">
      <button
        onClick={openAiChat}
        className="levelup-ai__button levelup-ai__button--close "
      >
        <img
          src={closeButton}
          alt="Close Button"
          className="levelup-ai__img--close"
        />
      </button>
      <img src={levelupAi} alt="levelup AI" className="levelup-ai__img" />
      <div className="levelup-ai__text-container">
        <div className="levelup-ai__text-container-top">
          <h2 className="levelup-ai__title">Need Some Help?</h2>
          <p className="levelup-ai__question">Ask me any question !</p>
        </div>
        <div className="levelup-ai__reply">
          <input
            placeholder="Write question here..."
            className="levelup-ai__input"
          />
          <button className="levelup-ai__button levelup-ai__button--send">
            <img
              src={sendButton}
              alt="Send Button"
              className="levelup-ai__img--send"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
