import "./overview.scss";
import FireIcon from "../../assets/icons/FireIcon.svg";
import CourseIcon from "../../assets/icons/CoursesIcon.svg";
import CrownIcon from "../../assets/icons/CrownIcon.svg";
import AwardIcon from "../../assets/icons/AwardIcon.svg";

const overviewCount = {
  daystreak: 10,
  coursecompleted: 1,
  rank: 1,
  award: 10,
};

export default function Overview() {
  return (
    <section className="overview">
      <h2 className="overview__title">Overview</h2>
      <div className="overview__container-top">
        <div className="overview__container">
          <img src={FireIcon} alt="Fire icon" className="overview__img" />
          <div className="overview__text-container">
            <p className="overview__count">{overviewCount.daystreak}</p>
            <p className="overview__decription">Day Streak</p>
          </div>
        </div>
        <div className="overview__container">
          <img src={CourseIcon} alt="Course icon" className="overview__img" />
          <div className="overview__text-container">
            <p className="overview__count">{overviewCount.coursecompleted}</p>
            <p className="overview__decription">Courses</p>
          </div>
        </div>
      </div>
      <div className="overview__container-bottom">
        <div className="overview__container">
          <img src={CrownIcon} alt="Crown icon" className="overview__img" />
          <div className="overview__text-container">
            <p className="overview__count">{overviewCount.rank}</p>
            <p className="overview__decription">Rank</p>
          </div>
        </div>
        <div className="overview__container">
          <img src={AwardIcon} alt="Award icon" className="overview__img" />
          <div className="overview__text-container">
            <p className="overview__count">{overviewCount.award}</p>
            <p className="overview__decription">Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
}
