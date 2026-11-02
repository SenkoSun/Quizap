import "./OptionButton.css";

function OptionButton({ text, letter, color, onClick }) {
  return (
    <button className={`option-btn ${color}`} onClick={onClick}>
      {letter}: {text}
    </button>
  );
}
export default OptionButton;
