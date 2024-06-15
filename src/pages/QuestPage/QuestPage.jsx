import "./QuestPage.scss";
import QuestNav from "../../components/QuestNav/QuestNav";
import Nav from "../../components/nav/nav";
import QuestQuestions from "../../components/QuestQuestions/QuestQuestions";
import LevelupAI from "../../components/levelupAi/levelupAi";
import { useState } from "react";
import { useParams } from "react-router-dom";

function QuestPage() {
  const [AiChat, setAiChat] = useState(false);
  const { course, level, quest, question } = useParams();

  const openAiChat = () => {
    setAiChat(!AiChat);
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
        />
        {AiChat && <LevelupAI openAiChat={openAiChat} />}
      </div>
    </div>
  );
}

export default QuestPage;
