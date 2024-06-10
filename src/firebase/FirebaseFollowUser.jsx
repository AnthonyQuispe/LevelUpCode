import {
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "./FirebaseConfig";

export const followUser = async (currentUserId, targetUserId) => {
  const followRef = doc(db, "users", currentUserId, "following", targetUserId);
  await setDoc(followRef, { followedAt: new Date() });

  // Update follower count in target user's document
  const userRef = doc(db, "users", targetUserId);
  const followerRef = doc(userRef, "followers", currentUserId);
  await setDoc(followerRef, { followedAt: new Date() }, { merge: true }); // Create or update follower entry
  await updateDoc(userRef, {
    followerCount: increment(1),
    followingCount: increment(1),
  });
};

export const unfollowUser = async (currentUserId, targetUserId) => {
  const followRef = doc(db, "users", currentUserId, "following", targetUserId);
  await deleteDoc(followRef);

  // Update follower count in target user's document
  const userRef = doc(db, "users", targetUserId);
  const followerRef = doc(userRef, "followers", currentUserId);
  await deleteDoc(followerRef); // Delete follower entry
  await updateDoc(userRef, {
    followerCount: increment(-1),
    followingCount: increment(-1),
  });
};
