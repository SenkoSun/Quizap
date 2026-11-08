import "./App.css";
import { useState } from "react";
import JoinScreen from "./components/JoinScreen";
import GameScreen from "./components/GameScreen";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [playerAvatar, setPlayerAvatar] = useState("😎");

  return (
    <div>
      {isGameStarted ? (
        <GameScreen
          playerName={playerName}
          playerAvatar={playerAvatar}
          onRestart={() => setIsGameStarted(false)}
        />
      ) : (
        <JoinScreen
          onStart={(name, avatar) => {
            setPlayerName(name);
            setPlayerAvatar(avatar);
            setIsGameStarted(true);
          }}
        />
      )}
    </div>
  );
}

export default App;
