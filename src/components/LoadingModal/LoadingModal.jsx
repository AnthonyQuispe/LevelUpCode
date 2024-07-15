import React from "react";
import "./LoadingModal.scss";
import levelupAi from "../../assets/logo/LevelUp.svg";

export default function LoadingModal() {
  return (
    <div className="loading">
      <img className="loading__img" src={levelupAi} alt="levelup AI" />
      <div className="loading__text-container">
        <h2 className="loading__title">Loading...</h2>
      </div>
    </div>
  );
}
