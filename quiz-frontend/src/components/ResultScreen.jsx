function ResultScreen({ playerName, rightAnswer, totalQuestions, onRestart }) {
  return (
    <div>
      <h1>Игра окончена!</h1>
      <h2>
        Твой результат: {rightAnswer} из {totalQuestions}
      </h2>
      <button onClick={onRestart}>Играть снова</button>
    </div>
  );
}
export default ResultScreen;
