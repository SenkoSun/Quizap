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
        <span className="badge-promo">BIG BRAINS BIGGER LAUGHS</span>

        <h1>
          Know it all?
          <br />
          Prove it.
        </h1>

        <p>
          Round up your favorite people for a fast, funny quiz night. No
          downloads. No serious faces.
        </p>

        <div className="emoji-collage-container">
          {/* Декоративная звездочка в углу */}
          <span className="emoji-decor-star">✨</span>

          {/* Главные крупные эмодзи */}
          <div className="emoji-main-character pink-box">😎</div>
          <div className="emoji-main-character yellow-circle">👽</div>
          <div className="emoji-main-character green-box">🦊</div>

          {/* Декоративный знак вопроса над ними */}
          <span className="emoji-decor-question">❓</span>

          {/* Облачко с текстом (спич-бабл), как у розового персонажа */}
          <div className="emoji-speech-bubble">I knew that. Ish.</div>
        </div>

        <div className="features-tags">
          <span className="tag-item">
            <span className="tag-plus">+</span> 2–8 friends
          </span>
          <span className="tag-item">
            <span className="tag-plus">+</span> 10 quick rounds
          </span>
          <span className="tag-item">
            <span className="tag-plus">+</span> 100% free
          </span>
        </div>
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
