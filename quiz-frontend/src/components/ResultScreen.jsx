import "./ResultScreen.css";

function ResultScreen({ playerName, rightAnswer, totalQuestions, onRestart }) {
  return (
    <div className="result-container">
      <h1 className="result-title">Игра окончена!</h1>
      <h2 className="player-name">Игрок: {playerName}</h2>

      <div className="score-box">
        <p className="score-label">Твой результат:</p>
        <h2>
          {rightAnswer} из {totalQuestions}
        </h2>
      </div>

      <button className="restart-btn" onClick={onRestart}>
        Играть снова
      </button>
    </div>
  );
}
export default ResultScreen;
