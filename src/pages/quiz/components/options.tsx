import { optionsProps } from "../quiz";

const Options = ({
  questionId,
  options,
  handleScore,
  questionIndex,
  correctOption,
}: optionsProps) => {
  return (
    <div className="options-wrapper">
      {options.map((option: string) => {
        return (
          <>
            <div className="radio-label-group">
              <input
                className="input-radio"
                type="radio"
                key={questionId}
                name={questionId.toString()}
                id={questionIndex + option}
                value={option}
                onChange={(chosenOption) =>
                  handleScore(chosenOption.target.value, correctOption)
                }
              />
              <label htmlFor={questionIndex + option}>{option}</label>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default Options;
