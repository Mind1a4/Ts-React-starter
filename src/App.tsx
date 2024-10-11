import React, { useState } from 'react';
import { GAMES } from './data';
import Game from './Game';

const App = () => {
  const [games, setGames] = useState(GAMES);

  const handleRemove = (id) => {
    setGames(games.filter((game) => game.id !== id));
  };

  const handleEdit = (id, updates) => {
    setGames(
      games.map((game) => (game.id === id ? { ...game, ...updates } : game))
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Game List</h1>
      <div>
        {games.map((game) => (
          <Game
            key={game.id}
            game={game}
            onRemove={handleRemove}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
