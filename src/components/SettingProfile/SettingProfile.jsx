import React, { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  getAuth,
  updateEmail,
  updatePassword,
  deleteUser,
} from "firebase/auth";
import { doc, deleteDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import LeftArrowIcon from "../../assets/icons/LeftArrowIcon.svg";
import profilePlaceholder from "../../assets/placeholder/Profile.png";
import Button from "../Button/Button";
import AlertModal from "../../components/AlertModal/AlertModal";
import { isUsernameTaken } from "../../firebase/FirebaseCreateUser";
import { UserContext } from "../../UserContext";
import { auth, db } from "../../firebase/FirebaseConfig";
import "./SettingProfile.scss";

export default function SettingProfile({ userData }) {
  const { user, updateUserData } = useContext(UserContext);
  const [name, setName] = useState(userData?.name || "NA");
  const [userName, setUserName] = useState(userData?.userName || "");
  const [email, setEmail] = useState(userData?.email || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [avatar, setAvatar] = useState(userData?.avatar || profilePlaceholder);
  const fileInputRef = useRef(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      // Check if the new username is already taken
      if (userName !== userData.userName) {
        const isTaken = await isUsernameTaken(userName);
        if (isTaken) {
          setError("Username is already taken.");
          setIsModalVisible(true);
          return;
        }
      }

      // Update user information in Firestore
      await updateUserData(user.uid, {
        name,
        userName,
        email,
      });

      // Update email in Firebase Auth if it has changed
      if (email !== userData.email) {
        await updateEmail(auth.currentUser, email);
      }

      // Update password in Firebase Auth if a new password is provided
      if (newPassword) {
        await updatePassword(auth.currentUser, newPassword);
      }

      setSuccess("Profile updated successfully!");
      setIsModalVisible(true);
    } catch (err) {
      setError(`Failed to update profile: ${err.message}`);
      setIsModalVisible(true);
    }
  };

  const handleDeleteAccount = async () => {
    if (
      !window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      return;
    }

    try {
      const auth = getAuth();
      const currentUser = auth.currentUser;

      if (currentUser) {
        await deleteUser(currentUser);
        await deleteDoc(doc(db, "users", user.uid));
        window.location.href = "/signup";
      }
    } catch (err) {
      setError("Failed to delete account: " + err.message);
      setIsModalVisible(true);
    }
  };

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const storage = getStorage();
      const storageRef = ref(storage, `avatars/${user.uid}`);
      await uploadBytes(storageRef, file);

      const downloadURL = await getDownloadURL(storageRef);
      setAvatar(downloadURL);
      await updateUserData(user.uid, { avatar: downloadURL });
    } catch (err) {
      setError("Failed to upload avatar: " + err.message);
      setIsModalVisible(true);
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setError(null);
    setSuccess(null);
  };

  return (
    <div className="setting-profile">
      <section className="setting-profile__top-container">
        <Link to="/setting" className="setting-profile__link-back">
          <img
            src={LeftArrowIcon}
            alt="left arrow icon"
            className="setting-profile__link-img"
          />
        </Link>
        <h1 className="setting-profile__title">Profile</h1>
        <h2 className="setting-profile__subtitle">Profile</h2>
      </section>
      <section className="setting-profile__bottom-container">
        <div className="setting-profile__avatar-container">
          <img
            className="setting-profile__avatar"
            src={avatar}
            alt="Profile Icon"
          />
          <input
            type="file"
            accept="image/*"
            className="setting-profile__avatar-input"
            ref={fileInputRef}
            onChange={handleAvatarChange}
            style={{ display: "none" }}
          />
          <button
            className="setting-profile__avatar-button"
            onClick={() => fileInputRef.current.click()}
          >
            Change Avatar
          </button>
        </div>
        <form className="setting-profile__form" onSubmit={handleSave}>
          <div className="setting-profile__input-container">
            <label className="setting-profile__label">Name</label>
            <input
              className="setting-profile__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>
          <div className="setting-profile__input-container">
            <label className="setting-profile__label">Username</label>
            <input
              className="setting-profile__input"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
            />
          </div>
          <div className="setting-profile__input-container">
            <label className="setting-profile__label">Email</label>
            <input
              className="setting-profile__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </div>
          <div className="setting-profile__input-container">
            <label className="setting-profile__label">Current Password</label>
            <input
              className="setting-profile__input"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              type="password"
            />
          </div>
          <div className="setting-profile__input-container">
            <label className="setting-profile__label">New Password</label>
            <input
              className="setting-profile__input"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
            />
          </div>
          <Button text="Save" className="button-pink" />
        </form>
        <AlertModal
          isVisible={isModalVisible}
          message={error || success}
          onClose={closeModal}
        />
        <button
          className="setting-profile__button"
          onClick={handleDeleteAccount}
        >
          DELETE MY ACCOUNT
        </button>
      </section>
    </div>
  );
}
