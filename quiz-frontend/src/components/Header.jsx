import "./Header.css";
// import { Link } from "react-router-dom";
import { useState } from "react";

function Header({ codeGame }) {
  const title = "quizap!";
  const description = "THE PARTY QUIZ";
  const rightText = "Good friends. Questionable answers.";
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (copied || !codeGame) return;

    // 1. Копируем текст в буфер обмена
    navigator.clipboard.writeText(String(codeGame).trim());

    // 2. Меняем иконку на галочку
    setCopied(true);

    // 3. Через 2 секунды (2000 мс) возвращаем иконку копирования обратно
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <header className="header">
      <a href="/" className="logo">
        <img
          src="/favicon.png"
          className="header-icon"
          alt="Logo"
          style={{ width: "24px", height: "24px", objectFit: "contain" }}
        />
        {title}
        <span>{description}</span>
      </a>

      <div className="header-right">
        <span>{rightText}</span>

        {Boolean(codeGame?.trim()) && (
          <button
            type="button"
            className="codeGame"
            onClick={handleCopy}
            title="Скопировать код игры"
          >
            <span className="codeGame-text">{codeGame} </span>
            <span> </span>

            <span className="codeGame-icon">
              {copied ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
            </span>
          </button>
        )}

        <button
          className={`icon-btn ${isSoundOn ? "sound-on" : "sound-off"}`}
          onClick={() => setIsSoundOn(!isSoundOn)}
        >
          {isSoundOn ? "🔊" : "🔇"}
        </button>
      </div>
    </header>
  );
}

export default Header;
