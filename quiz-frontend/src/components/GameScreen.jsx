import questions from "../data/questions";
import { useState } from "react";
import OptionButton from "./OptionButton";
import ResultScreen from "./ResultScreen";

function GameScreen({ playerName, onRestart }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(0);
  const currentQuestion = questions[currentIndex];
  const colors = ["red", "yellow", "green", "blue"];

  if (currentIndex >= questions.length) {
    return (
      <ResultScreen
        playerName={playerName}
        rightAnswer={rightAnswer}
        totalQuestions={questions.length}
        onRestart={onRestart}
      />
    );
  }

  function handleAnswerClick(index) {
    if (currentQuestion.correctAnswer === index) {
      setRightAnswer(rightAnswer + 1);
    }
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <div>
      <h2>Игрок: {playerName}</h2>
      <h1>Игра началась!</h1>
      <p>Тема: {currentQuestion.topic}</p>
      <h2>{currentQuestion.question}</h2>
      {currentQuestion.options.map((optionText, index) => (
        <OptionButton
          key={index}
          text={optionText}
          letter={["A", "B", "C", "D"][index]}
          onClick={() => handleAnswerClick(index)}
          color={colors[index]}
        />
      ))}
    </div>
  );
}
export default GameScreen;
