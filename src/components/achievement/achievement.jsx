import "./achievement.scss";
import { Link } from "react-router-dom";
import rightIcon from "../../assets/icons/RightArrowIcon.svg";
import achievements1 from "../../assets/achievement/AchievementIcon1.svg";
import achievements2 from "../../assets/achievement/AchievementIcon2.svg";

let achievementsArray = [
  {
    picture: achievements1,
    name: "SteadyPace",
    descriptions: "First lesson complete",
  },
  {
    picture: achievements2,
    name: "Number 1",
    descriptions: "1st place in leaderboard",
  },
];

export default function Achievement() {
  return (
    <div className="achievement">
      <h2 className="achievement__title">Achievements</h2>
      <div className="achievement__containers">
        {achievementsArray.map((achievements, index) => (
          <div className="achievement__container" key={index}>
            <img
              className="achievement__image"
              src={achievements.picture}
              alt="Achievement"
            />
            <div className="achievement__details">
              <h3 className="achievement__name">{achievements.name}:</h3>
              <p className="achievement__description">
                {achievements.descriptions}
              </p>
            </div>
          </div>
        ))}
        <div className="achievement__view-all">
          <p className="achievement__view-all-text">View All</p>
          <Link className="achievement__view-all-link" to="/">
            <img src={rightIcon} alt="Right Arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}
