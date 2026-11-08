import { useState } from "react";
import "./JoinScreen.css";

function JoinScreen({ onStart }) {
  const avatars = ["😎", "👽", "🦊", "🐸", "🐼"];
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("😎");
  const [isLoading, setIsLoading] = useState(false);

  function handleJoin() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onStart(name, avatar);
    }, 1000);
  }

  return (
    <div className="join-container">
      <div className="join-left">
        <h1>
          Know it all?
          <br />
          Prove it.
        </h1>
        <p>Укажите своё имя и выберите аватар, чтобы начать игру!</p>
      </div>

      <div className="join-card">
        <h2>Создать игрока</h2>
        <p className="subtitle">Введите данные для входа</p>

        <label className="input-label">ИМЯ ИГРОКА</label>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Ваш никнейм..."
            value={name}
            maxLength={10}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="char-count">{name.length} / 10</span>
        </div>

        <label className="input-label">ВЫБЕРИТЕ АВАТАР</label>
        <div className="avatar-grid">
          {avatars.map((emoji, index) => (
            <button
              key={index}
              type="button"
              /* В вашем CSS класс называется .selected, а не .active */
              className={`avatar-btn ${avatar === emoji ? "selected" : ""}`}
              onClick={() => setAvatar(emoji)}
            >
              {emoji}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="join-btn"
          onClick={handleJoin}
          disabled={name.trim() === "" || isLoading}
        >
          {isLoading ? "Входим..." : "Let's play! ->"}
        </button>
      </div>
    </div>
  );
}

export default JoinScreen;
