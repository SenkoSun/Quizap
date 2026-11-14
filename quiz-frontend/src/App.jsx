import "./App.css";
import { useState } from "react";
import JoinScreen from "./components/JoinScreen";
import GameScreen from "./components/GameScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [currentScreen, setCurrentScreen] = useState("game");
  const [playerName, setPlayerName] = useState("");
  const [playerAvatar, setPlayerAvatar] = useState("😎");
  const [codeGame, setCodeGame] = useState("ABCDEF");

  const screens = {
    join: (
      <JoinScreen
        onStart={(name, avatar) => {
          setPlayerName(name);
          setPlayerAvatar(avatar);
          setCurrentScreen("game");
        }}
      />
    ),
    game: (
      <GameScreen
        playerName={playerName}
        playerAvatar={playerAvatar}
        onRestart={() => setCurrentScreen("join")}
      />
    ),
    // сюда потом добавим createRoom и createTopic
  };

  return (
    <div className="app-layout">
      <Header codeGame={codeGame} />
      <main className="main-content">{screens[currentScreen]}</main>
      <Footer />
    </div>
  );
}

export default App;
