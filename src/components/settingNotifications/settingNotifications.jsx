import "./settingNotifications.scss";
import { Link } from "react-router-dom";
import LeftArrowIcon from "../../assets/icons/LeftArrowIcon.svg";
import Button from "../button/button";
import Checkbox from "../checkbox/checkbox";

export default function settingCourse() {
  return (
    <div className="setting-notifications">
      <section className="setting-notifications__top-container">
        <Link to="/setting" className="setting-notifications__link-back">
          <img
            src={LeftArrowIcon}
            alt="left arrow icon"
            className="setting-notifications__link-img"
          />
        </Link>
        <h1 className="setting-notifications__title">Notifications</h1>
        <h2 className="setting-notifications__sub-title">Notifications </h2>
      </section>
      <section className="setting-notifications__container">
        <div className="setting-notifications__button-container">
          <div className="setting-notifications__button">
            Reminders
            <Checkbox id="reminders" />
          </div>
          <div className="setting-notifications__button">
            Friends
            <Checkbox id="friends" />
          </div>
          <div className="setting-notifications__button">
            Leaderboards
            <Checkbox id="leaderboards" />
          </div>
          <div className="setting-notifications__button">
            Announcements
            <Checkbox id="announcements" />
          </div>
        </div>
        <Button text="Save" className="button-pink" />
      </section>
    </div>
  );
}
