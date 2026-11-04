import "./OptionButton.css";

function OptionButton({ text, letter, color, status, disabled, onClick }) {
  return (
    <button
      className={`option-btn ${color} ${status}`}
      onClick={onClick}
      disabled={disabled}
    >
      {letter}: {text}
    </button>
  );
}
export default OptionButton;
