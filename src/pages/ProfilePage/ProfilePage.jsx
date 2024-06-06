import "./ProfilePage.scss";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../UserContext";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase/FirebaseConfig";
import ProfilePlaceholder from "../../assets/placeholder/Profile.png";
import AddFriends from "../../components/addFriends/addFriends";
import Achievement from "../../components/achievement/achievement";
import FriendList from "../../components/friendList/friendList";
import Overview from "../../components/overview/overview";
import Nav from "../../components/nav/nav";
import HtmlIcon from "../../assets/icons/HtmlIcon.svg";
import CssIcon from "../../assets/icons/CssIcon.svg";
import Javascript from "../../assets/icons/JavascriptIcon.svg";
import ReactIcon from "../../assets/icons/ReactIcon.svg";

const courseIcons = {
  html: HtmlIcon,
  css: CssIcon,
  react: ReactIcon,
  javascript: Javascript,
};

const formatDate = (timestamp) => {
  const date = new Date(timestamp.seconds * 1000);
  const options = { year: "numeric", month: "long" };
  return date.toLocaleDateString(undefined, options);
};

function ProfilePage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { userData } = useContext(UserContext);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [following, setFollowing] = useState("");
  const [follower, setFollower] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [avatar, setAvatar] = useState(userData?.avatar || ProfilePlaceholder);
  const [courseName, setCourseName] = useState("");
  const [courseImg, setCourseImg] = useState("");

  useEffect(() => {
    if (userData) {
      setName(userData.name || "");
      setUserName(userData.userName || "");
      setFollowing(userData.following || 0);
      setFollower(userData.follower || 0);
      setJoinDate(userData.joinDate ? formatDate(userData.joinDate) : "");
      setAvatar(userData.avatar || ProfilePlaceholder);

      // Fetch the user's courses from Firestore
      const fetchCourses = async () => {
        try {
          const q = query(collection(db, `users/${userData.id}/course`));
          const querySnapshot = await getDocs(q);
          const courses = querySnapshot.docs.map((doc) => doc.data());
          if (courses.length > 0) {
            setCourseName(courses[0].courseName);
            setCourseImg(courseIcons[courses[0].courseName.toLowerCase()]);
          }
        } catch (error) {
          console.error("Error fetching courses: ", error);
        }
      };

      fetchCourses();
    }
  }, [userData]);

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
          <img
            className="profile-page__image-profile"
            src={avatar}
            alt="Profile"
          />

          <p className="profile-page__name">{name}</p>
        </div>
        <div className="profile-page__bottom-container">
          <div className="profile-page__bottom-container-left">
            <div className="profile-page__user-details">
              <p className="profile-page__username">{userName}</p>
              <p className="profile-page__date">Joined {joinDate}</p>
            </div>
            <div className="profile-page__count">
              <div className="profile-page__count-courses">
                {courseImg && (
                  <div className="profile-page__count-courses-container">
                    <img
                      src={courseImg}
                      alt={`Icon for ${courseName} course`}
                      className="profile-page__count-courses-img"
                    />
                    <p className="profile-page__count-course">
                      +{userData.courses}
                    </p>
                  </div>
                )}
                <p>Courses</p>
              </div>
              <div className="profile-page__count-following">
                <p> {following}</p>
                <p>Following </p>
              </div>
              <div className="profile-page__count-follower">
                <p>{follower}</p>
                <p>Followers </p>
              </div>
            </div>
            {windowWidth <= 1024 && <AddFriends />}
            <Overview />
            <Achievement />
          </div>
          <div className="profile-page__friends-container">
            {windowWidth >= 1024 && <AddFriends />}
            <FriendList />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;
