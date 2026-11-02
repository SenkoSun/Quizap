import "./App.css";
import { useState } from "react";
import JoinScreen from "./components/JoinScreen";
import GameScreen from "./components/GameScreen";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [playerName, setPlayerName] = useState("");

  return (
    <div>
      {isGameStarted ? (
        <GameScreen playerName={playerName} />
      ) : (
        <JoinScreen
          onStart={(name) => {
            setPlayerName(name);
            setIsGameStarted(true);
          }}
        />
      )}
    </div>
  );
}

export default App;
