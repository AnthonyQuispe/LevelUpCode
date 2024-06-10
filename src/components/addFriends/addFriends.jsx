import React, { useState } from "react";
import "./addFriends.scss";
import addFriendIcon from "../../assets/icons/AddFriendIcon.svg";
import uploadIcon from "../../assets/icons/UploadIcon.svg";
import AlertModal from "../AlertModal/AlertModal";

export default function AddFriends({ userName }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleUploadClick = () => {
    const profileUrl = `${window.location.origin}/profile/${userName}`;
    navigator.clipboard
      .writeText(profileUrl)
      .then(() => {
        setModalMessage("URL copied to clipboard!");
        setModalVisible(true);
      })
      .catch((err) => {
        setModalMessage("Failed to copy URL.");
        setModalVisible(true);
        console.error("Failed to copy URL:", err);
      });
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setModalMessage("");
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
      {isModalVisible && (
        <AlertModal
          isVisible={isModalVisible}
          message={modalMessage}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}
