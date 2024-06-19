import React, { useState, useContext } from "react";
import "./SettingPreferences.scss";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import LeftArrowIcon from "../../assets/icons/LeftArrowIcon.svg";
import Button from "../Button/Button";
import Checkbox from "../CheckBox/CheckBox";

export default function SettingPreferences() {
  const { user, userData, updateUserData } = useContext(UserContext);
  const [sound, setSound] = useState(userData.soundEnabled);

  const handleSoundChange = (event) => {
    setSound(event.target.checked);
  };

  const handleSave = () => {
    if (user) {
      updateUserData(user.uid, { soundEnabled: sound });
    }
  };

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
        <h2 className="setting-preferences__sub-title">Preferences</h2>
      </section>
      <section className="setting-preferences__container">
        <div className="setting-preferences__button-container">
          <div className="setting-preferences__button">
            Sound Effect
            <Checkbox id="sound" checked={sound} onChange={handleSoundChange} />
          </div>
        </div>
        <Button text="Save" className="button-pink" onClick={handleSave} />
      </section>
    </div>
  );
}
