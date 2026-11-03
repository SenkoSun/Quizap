import { useState } from "react";
import { useEffect } from "react";
import questions from "../data/questions";

import "./GameScreen.css";
import OptionButton from "./OptionButton";
import ResultScreen from "./ResultScreen";

function GameScreen({ playerName, onRestart }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);

  const currentQuestion = questions[currentIndex];
  const colors = ["red", "yellow", "green", "blue"];

  useEffect(() => {
    if (timeLeft <= 0) {
      handleAnswerClick(-1);
      return;
    }
    const timerId = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    // Очистка таймера (ОЧЕНЬ ВАЖНО!)
    return () => clearTimeout(timerId);
  }, [timeLeft]); // Зависимость от timeLeft

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
      setRightAnswer((prev) => prev + 1);
    }
    setCurrentIndex((prev) => prev + 1);
    setTimeLeft(15);
  }

  return (
    <div className="game-container">
      <h2>Игрок: {playerName}</h2>
      <div className="question-header">
        <div className={`timer-circle ${timeLeft <= 5 ? "danger" : ""}`}>
          {timeLeft}
        </div>
        <span className="topic-badge">{currentQuestion.topic}</span>
        <h2 className="question-text">{currentQuestion.question}</h2>
      </div>
      <div className="options-grid">
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
    </div>
  );
}
export default GameScreen;
