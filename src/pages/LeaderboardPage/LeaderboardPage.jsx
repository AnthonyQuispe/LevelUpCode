import "./LeaderboardPage.scss";
import Nav from "../../components/nav/nav";
import LeadboardIcon from "../../assets/icons/LeaderboardIcon.svg";
import ProfilePlaceholder from "../../assets/placeholder/Profile.png";
import { auth, db } from "../../firebase/FirebaseConfig";
import { useState, useEffect, useCallback } from "react";
import {
  doc,
  getDoc,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import LoadingModal from "../../components/LoadingModal/LoadingModal";

function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [currentUserRank, setCurrentUserRank] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchLeaderboard = useCallback(async () => {
    try {
      const leaderboardRef = collection(db, "leaderboard");
      const q = query(leaderboardRef, orderBy("Rank"), limit(20));
      const querySnapshot = await getDocs(q);

      const newEntries = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return data;
      });

      setLeaderboard(newEntries);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchCurrentUserRank = useCallback(async () => {
    try {
      const authUser = auth.currentUser;
      if (authUser) {
        const userRef = doc(db, "leaderboard", authUser.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          console.log("Current user data:", userData); // Debug log
          setCurrentUser(userData);
          setCurrentUserRank(userData.Rank);
        }
      }
    } catch (error) {
      console.error("Error fetching current user rank:", error);
    }
  }, []);

  useEffect(() => {
    fetchLeaderboard();
    fetchCurrentUserRank();
  }, [fetchLeaderboard, fetchCurrentUserRank]);

  return (
    <div className="leaderboard">
      <Nav />
      {loading && <LoadingModal />}
      <div className={`leaderboard-page ${loading ? "hidden" : ""}`}>
        <div className="leaderboard-page__top">
          <img
            className="leaderboard__icon"
            src={LeadboardIcon}
            alt="leaderboard Trophy"
          />
          <h1 className="leaderboard__title">Leaderboard</h1>
        </div>
        <div className="leaderboard-page__bottom">
          <ol className="leaderboard__list">
            {leaderboard.map((user, index) => (
              <li key={index} className="leaderboard__list-item">
                <div className="leaderboard__profile">
                  <p className="leaderboard__position">{user.Rank}</p>
                  <img
                    className="leaderboard__profile-img"
                    src={user.avatar ? user.avatar : ProfilePlaceholder}
                    alt={user.username}
                    onError={(e) => {
                      console.error(
                        `Error loading avatar for ${user.username}:`,
                        e
                      );
                      e.target.src = ProfilePlaceholder;
                    }}
                  />
                  <p className="leaderboard__name">{user.username}</p>
                </div>
                <div className="leaderboard__stats">
                  <p className="leaderboard__xp-amount">{user.Xp}</p>
                  <p className="leaderboard__xp">Xp</p>
                </div>
              </li>
            ))}
            {currentUser && currentUserRank > leaderboard.length && (
              <li className="leaderboard__list-item">
                <div className="leaderboard__profile">
                  <p className="leaderboard__position">{currentUser.Rank}</p>
                  <img
                    className="leaderboard__profile-img"
                    src={
                      currentUser.avatar
                        ? currentUser.avatar
                        : ProfilePlaceholder
                    }
                    alt={currentUser.username}
                    onError={(e) => {
                      console.error(
                        `Error loading avatar for current user:`,
                        e
                      );
                      e.target.src = ProfilePlaceholder;
                    }}
                  />
                  <p className="leaderboard__name">{currentUser.username}</p>
                </div>
                <div className="leaderboard__stats">
                  <p className="leaderboard__xp-amount">{currentUser.Xp}</p>
                  <p className="leaderboard__xp">Xp</p>
                </div>
              </li>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default LeaderboardPage;
