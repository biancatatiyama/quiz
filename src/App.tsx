import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/home";
import Quiz from "./pages/quiz/quiz";
import AddQuiz from './pages/addQuiz/addQuiz'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="add-quiz" element={<AddQuiz />}/>
      </Routes>
    </>
  );
}

export default App;
