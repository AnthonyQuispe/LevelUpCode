import { useEffect, useState } from "react";
import "./LeaderboardPage.scss";
import PacmanIcon from "../../assets/logo/LevelUpMasscot.svg"; // Placeholder for the Pac-Man icon

// Mock Data for the leaderboard
const leaderboardData = [
  { rank: 1, name: "PlayerOne", score: 1500 },
  { rank: 2, name: "PlayerTwo", score: 1300 },
  { rank: 3, name: "PlayerThree", score: 1100 },
  { rank: 4, name: "PlayerFour", score: 900 },
  { rank: 5, name: "PlayerFive", score: 700 },
];

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // Here you would fetch the leaderboard data from your server or database
    setLeaderboard(leaderboardData);
  }, []);

  return (
    <section className="leaderboard-page">
      <h1 className="leaderboard-page__title">Pac-Man Leaderboard</h1>
      <div className="leaderboard-page__container">
        {leaderboard.map((player) => (
          <div key={player.rank} className="leaderboard-page__entry">
            <img
              src={PacmanIcon}
              alt="Pacman icon"
              className="leaderboard-page__icon"
            />
            <div className="leaderboard-page__details">
              <p className="leaderboard-page__rank">#{player.rank}</p>
              <p className="leaderboard-page__name">{player.name}</p>
              <p className="leaderboard-page__score">{player.score} pts</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
