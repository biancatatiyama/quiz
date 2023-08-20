import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Button = styled.button`
  font-size: 0.71em;
  background-color: #c32074;
  padding: 1em 2.6em 1em 2.6em;
  min-width: 13em;
  border: none;
  border-radius: 0.7em;
  color: #fff;
  cursor: pointer;
  margin: 0.4em 0.8em 0.4em 0em;
  box-shadow: 10px 10px 42px -4px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: 10px 10px 42px -4px rgba(0, 0, 0, 0.26);
  box-shadow: 10px 10px 42px -4px rgba(0, 0, 0, 0.26);
  transition: background-color 0.45s ease;
  &:hover {
    background: #750f44;
  }
  @media screen and (max-width: 750px) {
    transition: all 400ms ease-in-out;
    font-size 0.45em;
    padding: 1em 1em 1em 1em;
    min-width: 4em;
    max-width: 12em;
  }
`;
const QuizButton = ({ quizTittle }: any) => {
  const navigate = useNavigate();
  return <Button onClick={() => navigate(quizTittle)}>{quizTittle}</Button>;
};
export default QuizButton;
