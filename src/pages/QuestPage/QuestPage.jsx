import "./QuestPage.scss";
import QuestNav from "../../components/QuestNav/QuestNav";
import Nav from "../../components/nav/nav";
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

function QuestPage() {
  const { course, level, quest, question } = useParams();
  const navigate = useNavigate();

  const updateLeaderboard = async (userId, newXp, username, avatar) => {
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

    let rank = 1;
    for (const docSnapshot of leaderboardSnapshot.docs) {
      await updateDoc(doc(db, `leaderboard/${docSnapshot.id}`), {
        rank: rank++,
      });
    }
  };

  const handleQuestionCompletion = async () => {
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

        console.log("Quest Ref Path:", questRef.path);
        console.log("User Ref Path:", userRef.path);

        const questDoc = await getDoc(questRef);
        console.log("Quest Document:", questDoc.data());

        const userDoc = await getDoc(userRef);
        console.log("User Document:", userDoc.data());

        if (userDoc.exists()) {
          const userData = userDoc.data();
          const newXp = (userData.Xp || 0) + 10;
          const newQuestCompleted = (userData.QuestCompleted || 0) + 1;
          console.log(
            "New Xp:",
            newXp,
            "New QuestCompleted:",
            newQuestCompleted
          );

          await updateDoc(userRef, {
            Xp: newXp,
            QuestCompleted: newQuestCompleted,
          });
          console.log("User XP and QuestCompleted updated");

          // Update leaderboard
          await updateLeaderboard(
            user.uid,
            newXp,
            userData.userName,
            userData.avatar
          );
        } else {
          const newXp = 10;
          const newQuestCompleted = 1;
          const userName = user.userName || "Unknown User";
          const avatar = user.avatar || "";

          await setDoc(
            userRef,
            {
              Xp: newXp,
              QuestCompleted: newQuestCompleted,
              userName: userName,
              avatar: avatar,
            },
            { merge: true }
          );
          console.log(
            "User document created with initial Xp and QuestCompleted"
          );

          // Update leaderboard
          await updateLeaderboard(user.uid, newXp, userName, avatar);
        }

        await setDoc(
          questRef,
          { status: "complete", completionDate: currentDate },
          { merge: true }
        );
        console.log("Quest marked as complete");

        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    }
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
      </div>
    </div>
  );
}

export default QuestPage;
