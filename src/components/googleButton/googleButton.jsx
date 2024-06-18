import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "../../firebase/FirebaseConfig";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import "./googleButton.scss";
import GoogleIcon from "../../assets/icons/GoogleIcon.svg";

const GoogleButton = () => {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const { user } = result;

      const username = user.email.split("@")[0];

      // Check if user already exists in Firestore
      const userRef = doc(db, "users", user.uid);
      const userSnapshot = await getDoc(userRef);

      if (!userSnapshot.exists()) {
        await setDoc(userRef, {
          userName: username,
          email: user.email,
          avatar: user.photoURL,
          joinDate: serverTimestamp(),
          name: user.displayName || "No Name Enter",
          rank: 0,
          QuestCompleted: 0,
          followingCount: 0,
          followerCount: 0,
          soundEnabled: true,
          remindersEmail: true,
          friendsEmail: true,
          learderBoardsEmail: true,
          announcementsEmail: true,
          Xp: 0,
        });
      }
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  return (
    <button className="google-button" onClick={handleGoogleSignIn}>
      <img src={GoogleIcon} alt="Google Login Icon" />
      Sign In With Google
    </button>
  );
};

export default GoogleButton;
