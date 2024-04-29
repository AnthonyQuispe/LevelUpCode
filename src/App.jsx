import "./styles/partials/_global.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import signupPage from "./pages/signupPage/signupPage";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/signup" element={<signupPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
