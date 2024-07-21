import "./FriendList.scss";
import placeholder from "../../assets/placeholder/Profile.png";
import { useState, useEffect } from "react";
import { db, auth } from "../../firebase/FirebaseConfig";
import { collection, query, getDocs, doc, getDoc } from "firebase/firestore";
import LoadingModal from "../LoadingModal/LoadingModal";

export default function FriendList() {
  const [showFollowing, setShowFollowing] = useState(true);
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentUser = auth.currentUser;

  useEffect(() => {
    const fetchFriends = async () => {
      if (!currentUser) return;
      setLoading(true);

      // Step 1: Fetch Following/Followers UIDs
      const userRef = collection(
        db,
        "users",
        currentUser.uid,
        showFollowing ? "following" : "followers"
      );
      const q = query(userRef);
      const querySnapshot = await getDocs(q);
      const friendUIDs = querySnapshot.docs.map((doc) => doc.id);

      // Step 2: Fetch User Details
      const friendsList = await Promise.all(
        friendUIDs.map(async (uid) => {
          const userDocRef = doc(db, "users", uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            return { id: uid, ...userDoc.data() };
          }
          return null;
        })
      );

      setFriends(friendsList.filter((friend) => friend !== null));
      setLoading(false);
    };

    fetchFriends();
  }, [currentUser, showFollowing]);

  return (
    <section className="friends">
      {loading && <LoadingModal />}
      <h2 className="friends__title">Friends</h2>
      <div className="friends__container">
        <div className="friends__buttons">
          <button
            className={`friends__button ${showFollowing ? "active" : ""}`}
            onClick={() => setShowFollowing(true)}
          >
            Following
          </button>
          <button
            className={`friends__button ${!showFollowing ? "active" : ""}`}
            onClick={() => setShowFollowing(false)}
          >
            Followers
          </button>
        </div>
        {loading ? null : friends.length === 0 ? (
          <p className="friends__text">Connect with other people</p>
        ) : (
          friends.map((friend) => (
            <div key={friend.id} className="friends__list">
              <img
                src={friend.avatar || placeholder}
                alt="friend icon"
                className="friends__picture"
              />
              <p className="friends__name">{friend.name}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
