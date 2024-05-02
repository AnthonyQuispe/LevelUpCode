import "./styles/partials/_global.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
