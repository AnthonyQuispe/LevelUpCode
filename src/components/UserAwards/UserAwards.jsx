import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import "./UserAwards.scss";
import { Link } from "react-router-dom";
import rightIcon from "../../assets/icons/RightArrowIcon.svg";

export default function UserAwards() {
  const { userAwards } = useContext(UserContext);
  const [userAwardsList, setUserAwardsList] = useState([]);

  useEffect(() => {
    if (userAwards) {
      setUserAwardsList(Object.values(userAwards));
    }
  }, [userAwards]);

  return (
    <div className="awards">
      <h2 className="awards__title">Awards</h2>
      <div className="awards__containers">
        {userAwardsList.map((award, index) => (
          <div className="awards__container" key={index}>
            <img className="awards__image" src={award.img} alt={award.name} />
            <div className="awards__details">
              <h3 className="awards__name">{award.name}:</h3>
              <p className="awards__description">{award.description}</p>
            </div>
          </div>
        ))}
        <div className="awards__view-all">
          <p className="awards__view-all-text">View All</p>
          <Link className="awards__view-all-link" to="/">
            <img src={rightIcon} alt="Right Arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}
