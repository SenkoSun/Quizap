import { useState } from "react";
import "./JoinScreen.css";

function JoinScreen({ onStart }) {
  const avatars = ["😎", "👽", "🦊", "🐸", "🐼"];
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("😎");
  const [isLoading, setIsLoading] = useState(false);
  const [roomCode, setRoomCode] = useState("");

  function handleJoin() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onStart(name, avatar, roomCode);
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
          <span className="emoji-decor-star">✨</span>

          <div className="emoji-main-character pink-box">😎</div>
          <div className="emoji-main-character yellow-circle">👽</div>
          <div className="emoji-main-character green-box">🦊</div>

          <span className="emoji-decor-question">❓</span>

          <div className="emoji-speech-bubble">I knew that. Ish.</div>
        </div>

        <div className="features-tags">
          <span className="tag-item">
            <span className="tag-plus">+</span> 2–8 friends
          </span>
          <span className="tag-item">
            <span className="tag-plus">+</span> 5 - 10 quick rounds
          </span>
          <span className="tag-item">
            <span className="tag-plus">+</span> 100% free
          </span>
        </div>
      </div>

      <div className="join-card">
        <h2>Your quiz crew awaits.</h2>
        <p className="subtitle">Pick a avatar, grab a name, and get in here.</p>

        <label className="input-label">WHAT SHOULD WE CALL YOU?</label>
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

        <div className="avatar-grid">
          {avatars.map((emoji, index) => (
            <button
              key={index}
              type="button"
              className={`avatar-btn ${avatar === emoji ? "selected" : ""}`}
              onClick={() => setAvatar(emoji)}
            >
              {emoji}
            </button>
          ))}
        </div>

        <div className="code-input-group">
          <label className="input-label">GOT A ROOM CODE?</label>
          <input
            type="text"
            className="code-input"
            placeholder="ENTER CODE"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
            maxLength={6}
          />
        </div>

        <button
          type="button"
          className="join-btn"
          onClick={handleJoin}
          disabled={name.trim() === "" || roomCode.trim() === "" || isLoading}
        >
          {isLoading ? "Loading..." : "Let's play! →"}
        </button>

        <div className="card-footer">
          <div className="card-footer-text">
            <p className="footer-title">Starting the party?</p>
            <p className="footer-subtitle">Your room, your rules.</p>
          </div>

          <button type="button" className="footer-switch-btn">
            Create room ↗
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinScreen;
