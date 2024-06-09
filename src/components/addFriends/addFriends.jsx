import React from "react";
import "./addFriends.scss";
import addFriendIcon from "../../assets/icons/AddFriendIcon.svg";
import uploadIcon from "../../assets/icons/UploadIcon.svg";

export default function AddFriends({ userName }) {
  const handleUploadClick = () => {
    const profileUrl = `${window.location.origin}/profile/${userName}`;
    navigator.clipboard
      .writeText(profileUrl)
      .then(() => {
        console.log("URL copied to clipboard:", profileUrl);
        return (
          <div>
            <></>
          </div>
        );
      })
      .catch((err) => {
        console.error("Failed to copy URL:", err);
      });
  };

  return (
    <section className="add-friends">
      <button className="add-friends__button">
        <img
          className="add-friends__img"
          src={addFriendIcon}
          alt="Add Friend"
        />
        Add Friends
      </button>
      <button
        className="add-friends__upload-button"
        onClick={handleUploadClick}
      >
        <img className="add-friends__img" src={uploadIcon} alt="Upload" />
      </button>
    </section>
  );
}
