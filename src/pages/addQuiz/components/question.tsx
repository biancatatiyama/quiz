import { useState } from "react";
import { FiDelete } from "react-icons/fi";
import Input from "./input";

const Question = ({
  handleChange,
  handleAddition,
  handleDeletion,
  optionsList,
}: any) => {
  const count = ["third", "fourth", "fifth"];
  /* 
  const handleAddition = () => {
    if (optionsList.length === 3) {
      alert("exceeded options");
      return;
    }
    setOptionsList([...optionsList, optionsList.length.toString()]);
  };
  const handleDeletion = (index: number) => {
    const newOptions = [...optionsList];
    newOptions.splice(index, 1);
    setOptionsList(newOptions);
  }; */
  return (
    <>
      <div className="add-quiz-container">
        <Input
          id="title"
          label="Title"
          name="title"
          placeholder="question title"
          handleChange={handleChange}
        />
        <Input
          id="0"
          label="Options"
          name="options"
          placeholder="first option"
          handleChange={handleChange}
        />
        <Input
          id="1"
          label=""
          name="options"
          placeholder="second option"
          handleChange={handleChange}
        />
        {optionsList.map((value: string, index: number) => (
          <div className="extra-input-container" key={index}>
            <Input
              id={(index + 2).toString()}
              label=""
              name="options"
              placeholder={`${count.at(index)} option`}
              handleChange={handleChange}
            />
            <FiDelete
              onClick={(index) => handleDeletion(index)}
              className="delete-icon"
            />
          </div>
        ))}
        <button type="button" onClick={handleAddition}>
          ADD OPTION
        </button>
        <Input
          id="correct_option"
          label="Correct Option"
          name="correct_option"
          placeholder="correct option"
          handleChange={handleChange}
        />
      </div>
    </>
  );
};

export default Question;
