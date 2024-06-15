import React, { useState } from "react";
import "./addFriends.scss";
import addFriendIcon from "../../assets/icons/AddFriendIcon.svg";
import uploadIcon from "../../assets/icons/UploadIcon.svg";
import AlertModal from "../AlertModal/AlertModal";
import Input from "../input/input";
import Button from "../button/button";
import closeIcon from "../../assets/icons/CloseIcon.png";
import { db, auth } from "../../firebase/FirebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { followUser, unfollowUser } from "../../firebase/FirebaseFollowUser";

export default function AddFriends({ userName }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [findFriendVisible, setFindFriendVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [followingStatus, setFollowingStatus] = useState({});
  const [noResultsMessage, setNoResultsMessage] = useState("");

  const currentUser = auth.currentUser;

  const handleAddFriendClick = () => {
    setFindFriendVisible(true);
  };

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

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async () => {
    console.log("Search initiated");
    if (searchQuery.length > 3) {
      const userRef = collection(db, "users");
      const q = query(
        userRef,
        where("userName", ">=", searchQuery),
        where("userName", "<=", searchQuery + "\uf8ff")
      );
      const querySnapshot = await getDocs(q);

      const results = [];
      const status = {};

      querySnapshot.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });

      for (const result of results) {
        const followDoc = await getDoc(
          doc(db, "users", currentUser.uid, "following", result.id)
        );
        status[result.id] = followDoc.exists();
      }

      setSearchResults(results);
      setFollowingStatus(status);

      // Set no results message if no users found
      if (results.length === 0) {
        setNoResultsMessage(
          <p className="find-friend-modal__alerts">
            "No users found with that username."
          </p>
        );
      } else {
        setNoResultsMessage(
          <p className="find-friend-modal__alerts">
            No users found with that username.
          </p>
        );
      }
    } else {
      setSearchResults([]);
      setFollowingStatus({});
      setNoResultsMessage(
        <p className="find-friend-modal__alerts">
          Please enter at least 3 characters.
        </p>
      );
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleAddFriend = async (friendId) => {
    try {
      await followUser(currentUser.uid, friendId);
      setFollowingStatus({ ...followingStatus, [friendId]: true });
      setModalMessage("Following user!");
    } catch (error) {
      console.error("Error following user:", error);
      setModalMessage("Failed to follow user.");
    }
    setModalVisible(true);
  };

  const handleUnfollowFriend = async (friendId) => {
    try {
      await unfollowUser(currentUser.uid, friendId);
      setFollowingStatus({ ...followingStatus, [friendId]: false });
      setModalMessage("Unfollowed user!");
    } catch (error) {
      console.error("Error unfollowing user:", error);
      setModalMessage("Failed to unfollow user.");
    }
    setModalVisible(true);
  };

  const handleCloseFindFriend = () => {
    setFindFriendVisible(false);
    setSearchQuery("");
    setSearchResults([]);
    setFollowingStatus({});
    setNoResultsMessage(""); // Clear the no results message
  };

  return (
    <section className="add-friends">
      <button className="add-friends__button" onClick={handleAddFriendClick}>
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
      {findFriendVisible && (
        <div className="find-friend-modal">
          <div className="find-friend-modal__content">
            <h2 className="find-friend-modal__title">Search for friends</h2>
            <Input
              className="find-friend-modal__input"
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress}
              placeholder="Enter friend's username"
            />
            <button
              className="find-friend-modal__close"
              onClick={handleCloseFindFriend}
            >
              <img
                className="find-friend-modal__image"
                src={closeIcon}
                alt="close Icon"
              />
            </button>
            <ul className="find-friend-modal__results">
              {searchResults.map((result) => (
                <li key={result.id} className="find-friend-modal__result-item">
                  {result.userName}
                  <Button
                    onClick={() => {
                      followingStatus[result.id]
                        ? handleUnfollowFriend(result.id)
                        : handleAddFriend(result.id);
                    }}
                    text={followingStatus[result.id] ? "Unfollow" : "Follow"}
                    className={"button button-friend"}
                  ></Button>
                </li>
              ))}
            </ul>
            {noResultsMessage && (
              <p className="find-friend-modal__no-results">
                {noResultsMessage}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
