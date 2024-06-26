import React, { useContext, useState, useEffect } from "react";
import "./Overview.scss";
import QuestIcon from "../../assets/icons/CoursesIcon.svg";
import CrownIcon from "../../assets/icons/CrownIcon.svg";
import AwardIcon from "../../assets/icons/AwardIcon.svg";
import XpIcon from "../../assets/icons/XpIcon.png";
import { UserContext } from "../../UserContext";

export default function Overview() {
  const { userData, userAwards } = useContext(UserContext);
  const [quest, setQuest] = useState(0);

  const [rank, setRank] = useState(0);
  const [award, setAward] = useState(0);
  const [xp, setXp] = useState(0);

  useEffect(() => {
    if (userData) {
      setQuest(userData.QuestCompleted || 0);
      setRank(userData.rank || 0);

      setXp(userData.Xp || 0);
    }
    if (userAwards) {
      setAward(Object.keys(userAwards).length);
    }
  }, [userData, userAwards]);

  return (
    <section className="overview">
      <h2 className="overview__title">Overview</h2>
      <div className="overview__container-top">
        <div className="overview__container">
          <img src={XpIcon} alt="Fire icon" className="overview__img" />
          <div className="overview__text-container">
            <p className="overview__count">{xp}</p>
            <p className="overview__decription">Xp</p>
          </div>
        </div>
        <div className="overview__container">
          <img src={QuestIcon} alt="Course icon" className="overview__img" />
          <div className="overview__text-container">
            <p className="overview__count">{quest}</p>
            <p className="overview__decription">Quest</p>
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
