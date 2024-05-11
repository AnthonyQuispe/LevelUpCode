import "./ProfilePage.scss";
import settingIcon from "../../assets/icons/SettingIcon.svg";
import ProfilePlaceholder from "../../assets/placeholder/Profile.png";
import AddFriends from "../../components/addFriends/addFriends";
import Achievement from "../../components/achievement/achievement";
import FriendList from "../../components/friendList/friendList";
import Overview from "../../components/overview/overview";
import BottomNav from "../../components/bottomNav/bottomNav";

let userData = {
  picture: "",
  name: "Anthony Quispe",
  username: "@ItsAnthonyQ",
  courses: 2,
  following: 1,
  follower: 2,
  joinDate: "April 2024",
};

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
          <AddFriends />
          <Overview />
          <Achievement />
        </div>
        <FriendList />
      </main>
      <BottomNav />
    </>
  );
}
export default ProfilePage;