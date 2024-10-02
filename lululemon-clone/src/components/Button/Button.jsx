import "./Button.css";

export const Button = ({ text, reverse }) => {
  return (
    <button
      className={reverse ? "button-component-reverse" : "button-component"}
    >
      {text}
    </button>
  );
};
