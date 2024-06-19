import "./QuestPage.scss";
import QuestNav from "../../components/QuestNav/QuestNav";
import Nav from "../../components/Nav/Nav";
import QuestQuestions from "../../components/QuestQuestions/QuestQuestions";
import { useParams, useNavigate } from "react-router-dom";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  query,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { db, auth } from "../../firebase/FirebaseConfig";
import LoadingModal from "../../components/LoadingModal/LoadingModal";
import { useState } from "react";

function QuestPage() {
  const { course, level, quest, question } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const updateLeaderboardAndUserRank = async (
    userId,
    newXp,
    username,
    avatar
  ) => {
    setLoading(true); // Set loading to true before async operation

    try {
      const leaderboardRef = doc(db, `leaderboard/${userId}`);
      await setDoc(
        leaderboardRef,
        { Xp: newXp, username: username, avatar: avatar },
        { merge: true }
      );

      const leaderboardCollectionRef = collection(db, "leaderboard");
      const leaderboardQuery = query(
        leaderboardCollectionRef,
        orderBy("Xp", "desc")
      );
      const leaderboardSnapshot = await getDocs(leaderboardQuery);

      let rank = 0;
      for (const docSnapshot of leaderboardSnapshot.docs) {
        await updateDoc(doc(db, `leaderboard/${docSnapshot.id}`), {
          rank: rank++,
        });
      }

      const userRef = doc(db, `users/${userId}`);
      await updateDoc(userRef, { rank: rank });
    } catch (error) {
      console.error("Error updating leaderboard and user rank: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleQuestionCompletion = async () => {
    setLoading(true);

    try {
      const currentQuestionNumber = parseInt(question);
      if (currentQuestionNumber < 5) {
        navigate(
          `/course/${course}/level/${level}/quest/${quest}/question/${
            currentQuestionNumber + 1
          }`
        );
      } else {
        const user = auth.currentUser;
        if (user) {
          const questRef = doc(
            db,
            `users/${user.uid}/course/${course}/level/${level}/quests/${quest}`
          );
          const userRef = doc(db, `users/${user.uid}`);
          const currentDate = new Date();

          const userDoc = await getDoc(userRef);

          if (userDoc.exists()) {
            const userData = userDoc.data();
            const newXp = (userData.Xp || 0) + 10;
            const newQuestCompleted = (userData.QuestCompleted || 0) + 1;

            await updateDoc(userRef, {
              Xp: newXp,
              QuestCompleted: newQuestCompleted,
            });

            await updateLeaderboardAndUserRank(
              user.uid,
              newXp,
              userData.userName,
              userData.avatar
            );
            await handleCourseStreak(
              user.uid,
              currentDate,
              userData.lastCompletionDate
            );
          } else {
            const newXp = 10;
            const newQuestCompleted = 1;
            const userName = user.displayName || "Unknown User";
            const avatar = user.photoURL || "";

            await setDoc(
              userRef,
              {
                Xp: newXp,
                QuestCompleted: newQuestCompleted,
                userName: userName,
                avatar: avatar,
                courseStreak: 1,
                lastCompletionDate: currentDate,
              },
              { merge: true }
            );

            await updateLeaderboardAndUserRank(
              user.uid,
              newXp,
              userName,
              avatar
            );
          }

          await setDoc(
            questRef,
            { status: "complete", completionDate: currentDate },
            { merge: true }
          );
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      }
    } catch (error) {
      console.error("Error completing question: ", error);
    } finally {
      setLoading(false); // Ensure loading is set to false in the end
    }
  };

  const handleCourseStreak = async (
    userId,
    currentDate,
    lastCompletionDate
  ) => {
    const userRef = doc(db, `users/${userId}`);
    const userDoc = await getDoc(userRef);
    const userData = userDoc.data();
    let courseStreak = userData.courseStreak || 0;

    if (!lastCompletionDate) {
      courseStreak = 1;
    } else {
      const diffInMs = currentDate - lastCompletionDate.toDate();
      const diffInHours = diffInMs / (1000 * 60 * 60);

      if (diffInHours >= 24) {
        courseStreak = 1;
      } else {
        courseStreak += 1;
      }
    }

    await updateDoc(userRef, {
      courseStreak: courseStreak,
      lastCompletionDate: currentDate,
    });
  };

  return (
    <div className="quest">
      <Nav />
      <div className="quest-page">
        <QuestNav />
        <QuestQuestions
          course={course}
          level={level}
          quest={quest}
          question={question}
          onQuestionCompletion={handleQuestionCompletion}
        />
        {loading && <LoadingModal />}
      </div>
    </div>
  );
}

export default QuestPage;
