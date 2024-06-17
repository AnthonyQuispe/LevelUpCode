import "./ProfilePage.scss";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../UserContext";
import ProfilePlaceholder from "../../assets/placeholder/Profile.png";
import AddFriends from "../../components/addFriends/addFriends";
import UserAwards from "../../components/UserAwards/UserAwards";
import FriendList from "../../components/friendList/friendList";
import Overview from "../../components/overview/overview";
import Nav from "../../components/nav/nav";
import { Link } from "react-router-dom";

const formatDate = (timestamp) => {
  const date = new Date(timestamp.seconds * 1000);
  const options = { year: "numeric", month: "long" };
  return date.toLocaleDateString(undefined, options);
};

function ProfilePage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { userData } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [following, setFollowing] = useState("");
  const [follower, setFollower] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [courses, setCourses] = useState("");
  const [avatar, setAvatar] = useState(userData?.avatar || ProfilePlaceholder);

  useEffect(() => {
    if (userData) {
      setUserName(userData.userName || "");
      setCourses(userData.courses || 0);
      setFollowing(userData.followingCount || 0);
      setFollower(userData.followerCount || 0);
      setJoinDate(userData.joinDate ? formatDate(userData.joinDate) : "");
      setAvatar(userData.avatar || ProfilePlaceholder);
    }
  }, [userData]);

  useEffect(() => {}, [userData, userName]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="profile">
      <Nav />
      <div className="profile-page">
        <div className="profile-page__top-container">
          <Link to={"/setting/profile"}>
            <img
              className="profile-page__image-profile"
              src={avatar}
              alt="Profile"
            />
          </Link>
          <p className="profile-page__name">{userName}</p>
        </div>
        <div className="profile-page__bottom-container">
          <div className="profile-page__bottom-container-left">
            <div className="profile-page__user-details">
              <p className="profile-page__date">Joined {joinDate}</p>
            </div>
            <div className="profile-page__count">
              <div className="profile-page__count-courses">
                <p>{courses}</p>
                <p>Courses</p>
              </div>
              <div className="profile-page__count-following">
                <p> {following}</p>
                <p>Following</p>
              </div>
              <div className="profile-page__count-follower">
                <p>{follower}</p>
                <p>Followers</p>
              </div>
            </div>
            {windowWidth <= 1024 && userName && (
              <AddFriends userName={userName} />
            )}
            <Overview />
            <UserAwards />
          </div>
          <div className="profile-page__friends-container">
            {windowWidth >= 1024 && userName && (
              <AddFriends userName={userName} />
            )}
            <FriendList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
