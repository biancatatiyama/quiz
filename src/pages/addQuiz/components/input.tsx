import { inputProps } from "../addQuiz";
const Input = ({ id, label, name, placeholder, handleChange }: inputProps) => {
  return (
    <>
      <div className="input-container">
        <label htmlFor={name}>{label}</label>
        <input
          id={id}
          type="text"
          name={name}
          placeholder={placeholder}
          onChange={(input) => handleChange(input)}
        />
      </div>
    </>
  );
};
export default Input;
