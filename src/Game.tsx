import React, { useState } from 'react';
import { GAMES } from './data';

const Game = ({ game, onRemove, onEdit }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showDetails, setShowDetails] = useState(true);
  const [editName, setEditName] = useState(game.name);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleRemoveClick = () => {
    onRemove(game.id);
  };

  const handleNameChange = (event) => {
    setEditName(event.target.value);
    onEdit(game.id, { name: event.target.value });
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg mb-4">
      <h2 className="text-lg font-bold">{game.name}</h2>

      {showDetails && (
        <>
          <p>{game.description || 'No description available.'}</p>
          {game.price && (
            <p>
              Price: {game.price} {game.currency}
            </p>
          )}
          {game.tags && (
            <div className="flex flex-wrap mt-2">
              {game.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 rounded px-2 py-1 mr-2 mb-2 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </>
      )}

      <div className="mt-4">
        <button
          onClick={handleFavoriteClick}
          className={`px-4 py-2 rounded ${
            isFavorite ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white'
          }`}
        >
          {isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>

        <button
          onClick={handleToggleDetails}
          className="ml-4 px-4 py-2 bg-green-500 text-white rounded"
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>

        <button
          onClick={handleRemoveClick}
          className="ml-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Remove Game
        </button>
      </div>

      <div className="mt-4">
        <input
          type="text"
          value={editName}
          onChange={handleNameChange}
          className="border p-2"
        />
      </div>
    </div>
  );
};

export default Game;
