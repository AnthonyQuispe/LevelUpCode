import "./QuestPage.scss";
import QuestNav from "../../components/QuestNav/QuestNav";
import Nav from "../../components/nav/nav";
import QuestQuestions from "../../components/QuestQuestions/QuestQuestions";
import LevelupAI from "../../components/levelupAi/levelupAi";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db, auth } from "../../firebase/FirebaseConfig";

function QuestPage() {
  const [AiChat, setAiChat] = useState(false);
  const { course, level, quest, question } = useParams();
  const navigate = useNavigate();

  const openAiChat = () => {
    setAiChat(!AiChat);
  };

  const handleQuestionCompletion = async () => {
    const currentQuestionNumber = parseInt(question);
    if (currentQuestionNumber < 5) {
      // Navigate to the next question
      navigate(
        `/course/${course}/level/${level}/quest/${quest}/question/${
          currentQuestionNumber + 1
        }`
      );
    } else {
      // Update quest completion status for the entire quest
      const user = auth.currentUser;
      if (user) {
        const questRef = doc(
          db,
          `users/${user.uid}/course/${course}/quests/${quest}`
        );
        const currentDate = new Date();
        await setDoc(
          questRef,
          { status: "complete", completionDate: currentDate },
          { merge: true }
        );
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000); // Redirect after 2 seconds
      }
    }
  };

  return (
    <div className="quest">
      <Nav />
      <div className="quest-page">
        <QuestNav openAiChat={openAiChat} />
        <QuestQuestions
          course={course}
          level={level}
          quest={quest}
          question={question}
          onQuestionCompletion={handleQuestionCompletion} // Pass callback function
        />
        {AiChat && <LevelupAI openAiChat={openAiChat} />}
      </div>
    </div>
  );
}

export default QuestPage;
