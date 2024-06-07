import "./addFriends.scss";
import addFriendIcon from "../../assets/icons/AddFriendIcon.svg";
import uploadIcon from "../../assets/icons/UploadIcon.svg";

export default function AddFriends() {
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
      <button className="add-friends__upload-button">
        <img className="add-friends__img" src={uploadIcon} alt="Upload" />
      </button>
    </section>
  );
}
