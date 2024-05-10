import "./ProfilePage.scss";
import { Link } from "react-router-dom";
import settingIcon from "../../assets/icons/SettingIcon.svg";
import ProfilePlaceholder from "../../assets/placeholder/Profile.png";
import uploadIcon from "../../assets/icons/UploadIcon.svg";
import addFriendIcon from "../../assets/icons/AddFriendIcon.svg";

let userData = {
  picture: "",
  name: "Anthony Quispe",
  username: "@ItsAnthonyQ",
  courses: 2,
  following: 1,
  follower: 2,
  joinDate: "April 2024",
};

let achievements = [
  {
    picture: "",
    name: "SteadyPace",
    descriptions: "Reach a 7 day streak",
  },
];

function ProfilePage() {
  return (
    <>
      <main className="profile-page">
        <div className="profile-page__top-container">
          <img
            className="profile-page__image-profile"
            src={ProfilePlaceholder}
            alt="Profile"
          />
          <img
            className="profile-page__image-gear"
            src={settingIcon}
            alt="Setting Icon"
          />
          <p className="profile-page__name">{userData.name}</p>
        </div>
        <div className="profile-page__bottom-container">
          <div className="profile-page__user-details">
            <p className="profile-page__username">{userData.username}</p>
            <p className="profile-page__date">Joined {userData.joinDate}</p>
          </div>
          <div className="profile-page__count">
            <div className="profile-page__count-courses">
              <p className="profile-page__count-course">+{userData.courses}</p>
              <p>Courses</p>
            </div>
            <div className="profile-page__count-following">
              <p> {userData.following}</p>
              <p>Following </p>
            </div>
            <div className="profile-page__count-follower">
              <p>{userData.follower}</p>
              <p>Followers </p>
            </div>
          </div>
          <div className="profile-page__buttons">
            <button className="profile-page__add-friend-button">
              <img src={addFriendIcon} alt="Add Friend" /> Add Friends
            </button>
            <button className="profile-page__upload-button">
              <img src={uploadIcon} alt="Upload" />
            </button>
          </div>
          <div className="profile-page__overview-container"></div>
          <div className="profile-page__achievements-container">
            <h2 className="profile-page__title">Achievements</h2>
            {achievements.map((achievement, index) => (
              <div className="profile-page__achievement" key={index}>
                <img
                  className="profile-page__achievement-image"
                  src={achievement.picture}
                  alt="Achievement"
                />
                <div className="profile-page__achievement-details">
                  <h3 className="profile-page__achievement-name">
                    {achievement.name}:
                  </h3>
                  <p className="profile-page__achievement-description">
                    {achievement.descriptions}
                  </p>
                </div>
              </div>
            ))}
            <div className="profile-page__view-all">
              <p>View All</p>
              <Link className="profile-page__view-all-link" to="/">
                <img src="" alt="Right Arrow" />
              </Link>
            </div>
          </div>
        </div>
        <section className="profile-page__friends-section">
          <h2 className="profile-page__friends-title">Friends</h2>
          <div className="profile-page__friends">
            <div className="profile-page__friends-buttons">
              <button className="profile-page__friends-button">
                Following
              </button>
              <button className="profile-page__friends-button">
                Followers
              </button>
            </div>
            <p className="profile-page__friends-text">
              Connect with other people
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
export default ProfilePage;
