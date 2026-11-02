import { useState } from "react";

function JoinScreen({ onStart }) {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>What should we call you?</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => onStart(name)} disabled={name.trim() === ""}>
        Let's play!
      </button>
      <p>Привет, {name}!</p>
    </div>
  );
}

export default JoinScreen;
