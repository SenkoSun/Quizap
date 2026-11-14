import "./OptionButton.css";

function OptionButton({
  text,
  letter,
  color,
  status,
  disabled,
  isSelected,
  onClick,
}) {
  return (
    <button
      className={`option-btn ${color} ${status}`}
      onClick={onClick}
      disabled={disabled}
    >
      {letter}: {text}
      {isSelected === true && <span className="option-check">✓</span>}
    </button>
  );
}
export default OptionButton;
