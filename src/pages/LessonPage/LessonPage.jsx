import "./LessonPage.scss";
import LessonNav from "../../components/lessonNav/lessonNav";
import Nav from "../../components/nav/nav";
import LessonQuestions from "../../components/lessonQuestions/lessonQuestions";
import LevelupAI from "../../components/levelupAi/levelupAi";
import { useState } from "react";

function LessonPage() {
  const [AiChat, setAiChat] = useState(false);

  const openAiChat = () => {
    setAiChat(!AiChat);
  };

  return (
    <div className="lesson">
      <Nav />
      <div className="lesson-page">
        <LessonNav openAiChat={openAiChat} />
        <LessonQuestions />
        {AiChat && <LevelupAI openAiChat={openAiChat} />}
      </div>
    </div>
  );
}

export default LessonPage;
