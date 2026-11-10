import "./App.css";
import { useState } from "react";
import JoinScreen from "./components/JoinScreen";
import GameScreen from "./components/GameScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [playerAvatar, setPlayerAvatar] = useState("😎");

  return (
    <div className="app-layout">
      {isGameStarted ? (
        <GameScreen
          playerName={playerName}
          playerAvatar={playerAvatar}
          onRestart={() => setIsGameStarted(false)}
        />
      ) : (
        <div className="app-layout">
          <Header />
          <main className="main-content">
            <JoinScreen
              onStart={(name, avatar) => {
                setPlayerName(name);
                setPlayerAvatar(avatar);
                setIsGameStarted(true);
              }}
            />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
