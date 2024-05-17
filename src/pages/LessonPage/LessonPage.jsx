import "./LessonPage.scss";
import LessonNav from "../../components/lessonNav/lessonNav";
import Nav from "../../components/nav/nav";

function LessonPage() {
  return (
    <div className="lesson">
      <Nav />
      <div className="lesson-page">
        <LessonNav />
      </div>
    </div>
  );
}

export default LessonPage;
