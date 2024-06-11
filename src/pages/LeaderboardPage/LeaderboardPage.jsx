import "./LeaderboardPage.scss";
import Nav from "../../components/nav/nav";
import LeadboardIcon from "../../assets/icons/LeaderboardIcon.svg";
import ProfilePlaceholder from "../../assets/placeholder/Profile.png";

function LeaderboardPage() {
  return (
    <div className="leaderboard-page">
      <Nav />
      <div className="leaderboard">
        <img
          className="leaderboard__icon"
          src={LeadboardIcon}
          alt="leaderboard Trophy"
        />
        <h1 className="leaderboard__title">Leaderboard</h1>
        <ol className="leaderboard__list">
          <li className="leaderboard__list-item">
            <div className="leaderboard__profile">
              <p className="leaderboard__position">1</p>
              <img
                className="leaderboard__profile-img"
                src={ProfilePlaceholder}
                alt="ProfilePlaceholder"
              />
              <p className="leaderboard__name">Anthony</p>
            </div>
            <div className="leaderboard__stats">
              <p className="leaderboard__xp-amount">10</p>
              <p className="leaderboard__xp">Xp</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default LeaderboardPage;
