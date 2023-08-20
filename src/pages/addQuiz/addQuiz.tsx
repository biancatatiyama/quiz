import "./styles/style.css";
import { useState } from "react";
import Axios from "axios";
import Question from "./components/question";
import uuid from "react-uuid";

interface inputProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  handleChange: Function;
}
interface questionProps {
  id: string;
  subject: string;
  title: string;
  options: Array<String>;
  correct_option: string;
}

const AddQuiz = () => {
  const [quiz, setQuiz] = useState<Array<Object>>([{}]);
  const [disabled, setDisabled] = useState(false);
  const [options, setOptions] = useState<Array<Object>>([{}]);
  const [question, setQuestion] = useState<questionProps>({
    id: "",
    subject: "",
    title: "",
    options: [],
    correct_option: "",
  });

  /*   const submitQuiz = () => {
    Axios.post("http://localhost:3001/api/insert", {
      subject: question.subject,
      title: question.title,
      options: question.options,
      correct_option: question.correct_option,
    }).then(() => alert("sucesso"));
  };
 */
  const handleChange = (input: React.ChangeEvent<HTMLInputElement>) => {
    const value = input.target.value;
    if (input.target.name === "options") {
      console.log(input.target.id);
      setOptions({ ...options, [input.target.id]: value });
      return;
    }
    setQuestion({ ...question, [input.target.name]: value });
    return;
  };
  //-- HANDLE ADDING AND REMOVING OF EXTRA OPTION --
  const [optionsList, setOptionsList] = useState<Array<String>>([]);

  const handleAddition = () => {
    if (optionsList.length === 3) {
      alert("exceeded options");
      return;
    }
    setOptionsList([...optionsList, optionsList.length.toString()]);
  };

  const handleDeletion = (index: number) => {
    const newOptions = [{ ...options }];
    const newOptionsList = [...optionsList];
    newOptionsList.splice(index, 1);
    console.log(newOptions);
    //setOptions(newOptions);
    setOptionsList(newOptionsList);
  };
  // -- INSERTING OPTIONS INSIDE OVERALL QUESTION --
  const newQuestion = {
    ...question,
    id: question.title,
    options: Object.values(options),
  };
  const [questionList, setQuestionList] = useState<Array<JSX.Element>>([]);
  const addQuestion = () => {
    quiz.forEach((element) => {
      console.log(element);
      /*  if (element.subject === "") {
        console.log("erro no subject");
        return;
      } else if (element.title === "") {
        console.log("erro no title");
        return;
      } else if (element.options.includes("") || element.options.length < 2) {
        console.log("erro nas options");
        return;
      } else if (element.correct_option === "") {
        console.log("erro na correct option");
        return;
      } */
      setQuiz((previous): Array<Object> => [...previous, newQuestion]);
      setQuestionList(
        questionList.concat(
          <Question key={questionList.length} handleChange={handleChange} />
        )
      );
    });
  };

  console.log(newQuestion);
  return (
    <>
      <form>
        <div className="add-quiz-wrapper">
          <div className="subject-container">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="your quiz subject"
              onChange={(input) => handleChange(input)}
            />
          </div>
          <Question
            handleChange={handleChange}
            handleAddition={handleAddition}
            handleDeletion={handleDeletion}
            optionsList={optionsList}
          />
          {questionList}
          <button type="button" onClick={addQuestion} disabled={disabled}>
            ADD QUESTION
          </button>
          <input className="submit" type="submit" value="SUBMIT" />
        </div>
      </form>
    </>
  );
};
export type { inputProps };
export default AddQuiz;
