import "./LessonPage.scss";
import LessonNav from "../../components/lessonNav/lessonNav";
import Nav from "../../components/nav/nav";
import LessonQuestions from "../../components/lessonQuestions/lessonQuestions";

function LessonPage() {
  return (
    <div className="lesson">
      <Nav />
      <div className="lesson-page">
        <LessonNav />
        <LessonQuestions />
      </div>
    </div>
  );
}

export default LessonPage;
