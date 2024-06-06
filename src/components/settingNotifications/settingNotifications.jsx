import "./SettingNotifications.scss";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../../UserContext";
import LeftArrowIcon from "../../assets/icons/LeftArrowIcon.svg";
import Button from "../button/button";
import Checkbox from "../checkbox/checkbox";

export default function SettingNotifications() {
  const { user, userData, updateUserData } = useContext(UserContext);
  const [reminders, setReminders] = useState(userData.remindersEmail || false);
  const [friends, setFriends] = useState(userData.friendsEmail || false);
  const [leaderBoard, setLeaderBoardEmail] = useState(
    userData.leaderBoardEmail || false
  );
  const [announcements, setAnnouncements] = useState(
    userData.announcementsEmail || false
  );

  const handleRemindersChange = (event) => {
    setReminders(event.target.checked);
  };

  const handleFriendsChange = (event) => {
    setFriends(event.target.checked);
  };

  const handleLeaderBoardsChange = (event) => {
    setLeaderBoardEmail(event.target.checked);
  };

  const handleAnnouncementsChange = (event) => {
    setAnnouncements(event.target.checked);
  };

  const handleSave = () => {
    if (user) {
      updateUserData(user.uid, {
        remindersEmail: reminders,
        friendsEmail: friends,
        leaderBoardEmail: leaderBoard,
        announcementsEmail: announcements,
      });
    }
  };

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
            <Checkbox
              id="remindersEmail"
              checked={reminders}
              onChange={handleRemindersChange}
            />
          </div>
          <div className="setting-notifications__button">
            Friends
            <Checkbox
              id="friendsEmail"
              checked={friends}
              onChange={handleFriendsChange}
            />
          </div>
          <div className="setting-notifications__button">
            Leaderboards
            <Checkbox
              id="leaderBoardsEmail"
              checked={leaderBoard}
              onChange={handleLeaderBoardsChange}
            />
          </div>
          <div className="setting-notifications__button">
            Announcements
            <Checkbox
              id="announcementsEmail"
              checked={announcements}
              onChange={handleAnnouncementsChange}
            />
          </div>
        </div>
        <Button text="Save" className="button-pink" onClick={handleSave} />
      </section>
    </div>
  );
}
