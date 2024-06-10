import "./ProfilePage.scss";
import { useContext, useState, useEffect, useCallback } from "react";
import { UserContext } from "../../UserContext";
import { getAuth } from "firebase/auth";
import ProfilePlaceholder from "../../assets/placeholder/Profile.png";
import FollowButton from "../../components/followButton/followButton";
import UserAwards from "../../components/UserAwards/UserAwards";
import FriendList from "../../components/friendList/friendList";
import Overview from "../../components/overview/overview";
import Nav from "../../components/nav/nav";
import { followUser, unfollowUser } from "../../firebase/FirebaseFollowUser";
import AlertModal from "../../components/AlertModal/AlertModal";
import { useParams } from "react-router-dom";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase/FirebaseConfig";

const formatDate = (timestamp) => {
  const date = new Date(timestamp.seconds * 1000);
  const options = { year: "numeric", month: "long" };
  return date.toLocaleDateString(undefined, options);
};

function ProfilePage() {
  const { username } = useParams(); // Get the username from the URL
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { userData, loading } = useContext(UserContext);
  const [profileUserData, setProfileUserData] = useState(null);
  const auth = getAuth();
  const currentUser = auth.currentUser;

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [following, setFollowing] = useState("");
  const [follower, setFollower] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [courses, setCourses] = useState("");
  const [avatar, setAvatar] = useState(ProfilePlaceholder);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isFollowing, setIsFollowing] = useState(false);

  const fetchProfileUserData = useCallback(async () => {
    if (!username || loading) return;

    // Fetch user data by username
    const userRef = collection(db, "users");
    const q = query(userRef, where("userName", "==", username));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();
      userData.id = userDoc.id; // Add user ID to the userData
      setProfileUserData(userData);

      setName(userData.name || "");
      setUserName(userData.userName || "");
      setCourses(userData.courses || 0);
      setFollowing(userData.following || 0);
      setFollower(userData.follower || 0);
      setJoinDate(userData.joinDate ? formatDate(userData.joinDate) : "");
      setAvatar(userData.avatar || ProfilePlaceholder);
    } else {
      console.error("No such document!");
      setAlertMessage("User data not found");
      setAlertVisible(true);
    }
  }, [username, loading]);

  const checkIfFollowing = useCallback(async () => {
    if (!currentUser || !profileUserData) {
      console.error("User data or profile user ID is not defined");
      return;
    }

    try {
      const docRef = doc(
        db,
        "users",
        currentUser.uid,
        "following",
        profileUserData.id
      );
      const docSnap = await getDoc(docRef);
      setIsFollowing(docSnap.exists());
    } catch (error) {
      console.error("Error checking follow status:", error);
    }
  }, [currentUser, profileUserData]);

  useEffect(() => {
    fetchProfileUserData();
  }, [fetchProfileUserData]);

  useEffect(() => {
    if (currentUser && profileUserData) {
      checkIfFollowing();
    }
  }, [currentUser, profileUserData, checkIfFollowing]);

  const handleFollow = async () => {
    if (!profileUserData?.id) return;

    try {
      await followUser(currentUser.uid, profileUserData.id);
      setIsFollowing(true);
      setFollower((prev) => prev + 1);
      setAlertMessage("Successfully followed the user!");
      setAlertVisible(true);
    } catch (error) {
      console.error("Failed to follow user:", error);
      setAlertMessage("Failed to follow the user.");
      setAlertVisible(true);
    }
  };

  const handleUnfollow = async () => {
    if (!profileUserData?.id) return;

    try {
      await unfollowUser(currentUser.uid, profileUserData.id);
      setIsFollowing(false);
      setFollower((prev) => prev - 1);
      setAlertMessage("Successfully unfollowed the user!");
      setAlertVisible(true);
    } catch (error) {
      console.error("Failed to unfollow user:", error);
      setAlertMessage("Failed to unfollow the user.");
      setAlertVisible(true);
    }
  };

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
                <p>{courses}</p>
                <p>Courses</p>
              </div>
              <div className="profile-page__count-following">
                <p>{following}</p>
                <p>Following</p>
              </div>
              <div className="profile-page__count-follower">
                <p>{follower}</p>
                <p>Followers</p>
              </div>
            </div>
            {windowWidth <= 1024 && (
              <FollowButton
                isFollowing={isFollowing}
                onFollow={handleFollow}
                onUnfollow={handleUnfollow}
              />
            )}
            <Overview />
            <UserAwards />
          </div>
          <div className="profile-page__friends-container">
            {windowWidth >= 1024 && (
              <FollowButton
                isFollowing={isFollowing}
                onFollow={handleFollow}
                onUnfollow={handleUnfollow}
              />
            )}
            <FriendList />
          </div>
        </div>
      </div>
      <AlertModal
        isVisible={alertVisible}
        message={alertMessage}
        onClose={() => setAlertVisible(false)}
      />
    </div>
  );
}

export default ProfilePage;
