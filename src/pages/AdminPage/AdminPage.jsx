import React from "react";
import { populateFirestore } from "../../populateFirestore";
import Button from "../../components/Button/Button";

export default function AdminPage() {
  const handlePopulateClick = async () => {
    try {
      await populateFirestore();
      alert("Firestore has been populated!");
    } catch (error) {
      console.error("Error populating Firestore:", error);
    }
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <Button onClick={handlePopulateClick} text="Populate Firestore" />
    </div>
  );
}
