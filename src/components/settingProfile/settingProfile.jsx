import "./settingProfile.scss";
import { Link } from "react-router-dom";
import LeftArrowIcon from "../../assets/icons/LeftArrowIcon.svg";
import profilePlaceholder from "../../assets/placeholder/Profile.png";
import Button from "../button/button";

const profileInfo = [
  {
    name: "Anthony Quispe",
    username: "itsAnthonyQ",
    email: "xxianthonyxx@gmail.com",
  },
];

console.log(profileInfo.name);

export default function settingProfile() {
  return (
    <div className="setting-profile">
      <section className="setting-profile__top-container">
        <Link to="/setting" className="setting-profile__link-back">
          <img
            src={LeftArrowIcon}
            alt="left arrow icon"
            className="setting-profile__link-img"
          />
        </Link>
        <h1 className="setting-profile__title">Profile</h1>
      </section>

      <section className="setting-profile__bottom-container">
        <div className="setting-profile__avatar-container">
          <img
            className="setting-profile__avatar"
            src={profilePlaceholder}
            alt="Profile Icon"
          />
          <button className="setting-profile__avatar-button">
            Change Avatar
          </button>
        </div>
        <form className="setting-profile__form">
          <div className="setting-profile__input-container">
            <label className="setting-profile__label">Name</label>
            <input
              className="setting-profile__input"
              defaultValue={profileInfo[0].name}
            />
          </div>
          <div className="setting-profile__input-container">
            <label className="setting-profile__label">Username</label>
            <input
              className="setting-profile__input"
              defaultValue={profileInfo[0].username}
            />
          </div>
          <div className="setting-profile__input-container">
            <label className="setting-profile__label">Email</label>
            <input
              className="setting-profile__input"
              defaultValue={profileInfo[0].email}
            />
          </div>
          <div className="setting-profile__input-container">
            <label className="setting-profile__label">Current Passowrd</label>
            <input className="setting-profile__input" />
          </div>
          <div className="setting-profile__input-container">
            <label className="setting-profile__label">New Password</label>
            <input className="setting-profile__input" />
          </div>
          <Button text="Save" className="button-pink" />
        </form>
        <button className="setting-profile__button">DELETE MY ACCOUNT</button>
      </section>
    </div>
  );
}
