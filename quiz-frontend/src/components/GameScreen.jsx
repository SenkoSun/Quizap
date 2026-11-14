import { useState } from "react";
import { useEffect } from "react";
import questions from "../data/questions";

import "./GameScreen.css";
import OptionButton from "./OptionButton";
import ResultScreen from "./ResultScreen";

function GameScreen({ playerName, playerAvatar, onRestart }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const currentQuestion = questions[currentIndex];
  const colors = ["red", "yellow", "green", "blue"];

  useEffect(() => {
    if (currentIndex >= questions.length) {
      return;
    }
    if (timeLeft <= 0) {
      handleAnswerClick(-1);
      return;
    }
    const timerId = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

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
    setSelectedAnswer(index);
    if (currentQuestion.correctAnswer === index) {
      setRightAnswer((prev) => prev + 1);
    }
    setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setTimeLeft(15);
      setSelectedAnswer(null);
    }, 1500);
  }

  return (
    <div className="game-screen">
      <div className="game-container">
        <div className="card-top-row">
          <span className="topic-badge">{currentQuestion.topic}</span>

          <span className="topic-subtitle">
            {currentQuestion.topic} · Single choice
          </span>
        </div>

        <div className="card-middle-row">
          <h2 className="question-text">{currentQuestion.question}</h2>

          <div className="timer-section">
            <div className={`timer-circle ${timeLeft <= 5 ? "danger" : ""}`}>
              {timeLeft}
              <span className="timer-label">SECONDS</span>
            </div>
          </div>
        </div>

        <div className="progress-bar-bg">
          <div
            style={{ width: `${((15 - timeLeft + 1) / 15) * 100}%` }}
            className={`progress-bar-fill ${timeLeft <= 5 ? "danger" : ""}`}
          ></div>
        </div>
      </div>

      <div className="question-container">
        <div className="options-grid">
          {currentQuestion.options.map((optionText, index) => {
            // 1. Вычисляем статус для текущей кнопки
            let status = "";

            if (selectedAnswer !== null) {
              if (index === currentQuestion.correctAnswer) {
                status = "correct"; // Показываем правильный всегда, когда ответ дан
              } else {
                status = "dimmed"; // Если игрок нажал сюда, но это не correctAnswer
              }
            }

            // 2. Возвращаем компонент и передаем в него вычисленный status
            return (
              <OptionButton
                key={index}
                text={optionText}
                letter={["A", "B", "C", "D"][index]}
                onClick={() => handleAnswerClick(index)}
                color={colors[index]}
                status={status} // Передаем проп status в компонент кнопки
                disabled={selectedAnswer !== null}
                isSelected={selectedAnswer === index}
              />
            );
          })}
        </div>
      </div>

      <div className="game-footer">
        <div className="player-badge">
          <span>{playerAvatar}</span>
          <span>Игрок: {playerName}</span>
        </div>
        <span>A, B, C, D to answer</span>
      </div>
    </div>
  );
}
export default GameScreen;
