import "./settingPreferences.scss";
import LeftArrowIcon from "../../assets/icons/LeftArrowIcon.svg";
import { Link } from "react-router-dom";
import Button from "../button/button";
import Checkbox from "../checkbox/checkbox";

export default function settingPreferences() {
  return (
    <div className="setting-preferences">
      <section className="setting-preferences__top-container">
        <Link to="/setting" className="setting-preferences__link-back">
          <img
            src={LeftArrowIcon}
            alt="left arrow icon"
            className="setting-preferences__link-img"
          />
        </Link>
        <h1 className="setting-preferences__title">Preferences</h1>
        <h2 className="setting-preferences__sub-title">Preferences </h2>
      </section>
      <section className="setting-preferences__container">
        <div className="setting-preferences__button-container">
          <div className="setting-preferences__button">
            Appearance
            <Checkbox id="appearance" />
          </div>
          <div className="setting-preferences__button">
            Sound Effect
            <Checkbox id="sound" />
          </div>
        </div>
        <Button text="Save" className="button-pink" />
      </section>
    </div>
  );
}
