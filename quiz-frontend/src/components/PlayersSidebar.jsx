import "./PlayersSidebar.css";

function PlayersSidebar({ playerName, playerAvatar, hasAnswered }) {
  const players = [
    { id: 1, name: "Алекс", avatar: "😎", points: 1200, answered: true },
    { id: 2, name: "Мария", avatar: "👽", points: 980, answered: false },
    { id: 3, name: "Дмитрий", avatar: "🦊", points: 870, answered: true },
    { id: 4, name: "Ольга", avatar: "🐸", points: 640, answered: true },
    { id: 5, name: "Иван", avatar: "🐼", points: 320, answered: false },
    {
      id: 6,
      name: playerName,
      avatar: playerAvatar,
      points: 500,
      answered: hasAnswered,
      isCurrent: true,
    },
  ];

  // Считаем, сколько человек уже ответили
  const answeredCount = players.filter((p) => p.answered).length;

  return (
    <aside className="players-sidebar">
      {/* 1. Шапка карточки */}
      <div className="sidebar-header">
        <h3 className="sidebar-title">The crew</h3>
        <span className="crew-badge">{players.length}/8</span>
      </div>

      {/* 2. Список игроков */}
      <ul className="leaderboard">
        {players.map((player) => (
          <li
            key={player.id}
            className={`leaderboard__item ${
              player.isCurrent ? "leaderboard__item--current" : ""
            }`}
          >
            <div className="leaderboard__avatar">{player.avatar}</div>

            <div className="leaderboard__info">
              <span className="leaderboard__name">
                {player.name}
                {player.isCurrent && " (ты)"}
              </span>
              <span className="leaderboard__points">{player.points} pts</span>
            </div>

            <span
              className={`leaderboard__status ${
                player.answered ? "is-answered" : "is-waiting"
              }`}
            >
              {player.answered ? "🕒" : "•••"}
            </span>
          </li>
        ))}
      </ul>

      {/* 3. Подвал со счетчиком */}
      <div className="sidebar-footer">
        <span className="status-dot"></span>
        <span>
          {answeredCount} of {players.length} answers locked in
        </span>
      </div>
    </aside>
  );
}

export default PlayersSidebar;
