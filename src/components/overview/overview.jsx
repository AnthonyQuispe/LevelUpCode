import "./overview.scss";
import FireIcon from "../../assets/icons/FireIcon.svg";
import CourseIcon from "../../assets/icons/CoursesIcon.svg";
import CrownIcon from "../../assets/icons/CrownIcon.svg";
import AwardIcon from "../../assets/icons/AwardIcon.svg";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../UserContext";

export default function Overview() {
  const { userData } = useContext(UserContext);
  const [course, setCourses] = useState(0);
  const [rank, setRank] = useState(0);
  const [award, setAward] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    if (userData) {
      setCourses(userData.courses || 0);
      setRank(userData.rank || 0);
      setAward(userData.award || 0);
      setStreak(userData.streak || 0);
    }
  }, [userData]);

  return (
    <section className="overview">
      <h2 className="overview__title">Overview</h2>
      <div className="overview__container-top">
        <div className="overview__container">
          <img src={FireIcon} alt="Fire icon" className="overview__img" />
          <div className="overview__text-container">
            <p className="overview__count">{streak}</p>
            <p className="overview__decription">Streak</p>
          </div>
        </div>
        <div className="overview__container">
          <img src={CourseIcon} alt="Course icon" className="overview__img" />
          <div className="overview__text-container">
            <p className="overview__count">{course}</p>
            <p className="overview__decription">Courses</p>
          </div>
        </div>
      </div>
      <div className="overview__container-bottom">
        <div className="overview__container">
          <img src={CrownIcon} alt="Crown icon" className="overview__img" />
          <div className="overview__text-container">
            <p className="overview__count">{rank}</p>
            <p className="overview__decription">Rank</p>
          </div>
        </div>
        <div className="overview__container">
          <img src={AwardIcon} alt="Award icon" className="overview__img" />
          <div className="overview__text-container">
            <p className="overview__count">{award}</p>
            <p className="overview__decription">Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
}
