import "./Header.css";
import { useState } from "react";

function Header() {
  const title = "quizap!";
  const description = "THE PARTY QUIZ";
  const rightText = "Good friends. Questionable answers.";
  const [isSoundOn, setIsSoundOn] = useState(true);

  return (
    <header className="header">
      <div className="logo">
        <img
          src="/favicon.png"
          className="header-icon"
          alt="Logo"
          style={{ width: "24px", height: "24px", objectFit: "contain" }}
        />
        {title}
        <span>{description}</span>
      </div>

      <div className="header-right">
        <span>{rightText}</span>
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
