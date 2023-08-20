import { useState } from "react";
import "./styles/style.css";
import { useNavigate } from "react-router-dom";
import Options from "./components/options";
import { HiArrowLeft } from "react-icons/hi2";

interface optionsProps {
  questionId: number;
  options: string[];
  handleScore: Function;
  questionIndex: number;
  correctOption: string;
}

const Quiz = () => {
  const navigate = useNavigate();
  const Questions = [
    {
      id: 1,
      subject: "Homem e Sociedade",
      title: "Qual a capital do Brasil?",
      options: ["São Paulo", "Distrito Federal", "Rio de Janeiro"],
      correct_option: "Distrito Federal",
    },
    {
      id: 2,
      subject: "Homem e Sociedade",
      title: "Qual a idade da Bianca?",
      options: ["18", "22", "21"],
      correct_option: "21",
    },
  ];

  const [score, setScore] = useState([]);

  const handleScore = (chosenOption: never, correctOption: string) => {
    if (score.includes(chosenOption)) {
      return;
    }
    if (chosenOption === correctOption) {
      setScore((score) => [...score, chosenOption]);
      return;
    }
    setScore(score.filter((chosenOption) => chosenOption !== correctOption));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Your score is ${score.length} out of ${Questions.length}`);
  };

  return (
    <div className="quiz-wrapper">
      <form className="form-container" onSubmit={handleSubmit}>
        <HiArrowLeft onClick={() => navigate("/")} className="react-icon" />
        {Questions.map((question, index) => {
          return (
            <>
              <h4 className="question-title">
                {index + 1} &#41; {question.title.toUpperCase()}
              </h4>
              <div className="underline-box"></div>
              <Options
                questionId={question.id}
                options={question.options}
                correctOption={question.correct_option}
                questionIndex={index}
                handleScore={handleScore}
              />
            </>
          );
        })}
        <div className="input-wrapper">
          <input className="submit-button" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
export type { optionsProps };
export default Quiz;
