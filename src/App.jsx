import "./styles/partials/_global.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./UserContext";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LogInPage from "./pages/LogInPage/LogInPage";
import TermConditionsPage from "./pages/TermsConditionsPage/TermsConditionsPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import SettingPage from "./pages/SettingPage/SettingPage";
import SelectCoursePage from "./pages/SelectLanguage/SelectLanguage";
import SelectDifficulty from "./pages/SelectDifficulty/SelectDifficulty";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import PublicProfilePage from "./pages/PublicProfilePage/PublicProfilePage";
import LeaderBoardPage from "./pages/LeaderboardPage/LeaderboardPage";
import QuestPage from "./pages/QuestPage/QuestPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import SoundButton from "./components/SoundButton/SoundButton";

function App() {
  return (
    <UserProvider>
      <main>
        <SoundButton />
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/terms" element={<TermConditionsPage />} />
          <Route path="/select/course" element={<SelectCoursePage />} />
          <Route path="/select/difficulty" element={<SelectDifficulty />} />
          <Route path="/" element={<DashboardPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/setting/*" element={<SettingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/:username" element={<PublicProfilePage />} />
          <Route path="/leaderboard" element={<LeaderBoardPage />} />
          <Route
            path="/course/:course/level/:level/quest/:quest/question/:question"
            element={<QuestPage />}
            exact
          />
        </Routes>
      </main>
    </UserProvider>
  );
}

export default App;
