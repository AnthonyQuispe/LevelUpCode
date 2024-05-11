import "./friendList.scss";

export default function FriendList() {
  return (
    <section className="friends">
      <h2 className="friends__title">Friends</h2>
      <div className="friends__container">
        <div className="friends__buttons">
          <button className="friends__button">Following</button>
          <button className="friends__button">Followers</button>
        </div>
        <p className="friends__text">Connect with other people</p>
      </div>
    </section>
  );
}
