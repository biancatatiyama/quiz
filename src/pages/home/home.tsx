import { useNavigate } from "react-router-dom";
import QuizButton from "../../components/quizButton";
import "./styles/style.css";
import { FaReact } from "react-icons/fa";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-wrapper">
        <header>
          <h1>
            Welcome <FaReact className="react-icon" />
          </h1>
          <div className="underline-box"></div>
          <p>create your own quiz with this React application</p>
        </header>
        <div className="container">
          <div className="main-container">
            <h1>my quizzes</h1>
            <div className="underline-box"></div>
            <div className="quiz-button-wrapper">
              <QuizButton quizTittle="quiz" />
              <button
                className="add-button"
                onClick={() => navigate("add-quiz")}
              >
                +
              </button>
            </div>
          </div>
          <div className="side-column">
            This application was made so studying for exams is an easier and
            less stressful process :&#41; <br />
            <p>but feel like using it whoever you like</p>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </>
  );
};
export default HomePage;
