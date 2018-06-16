import React from 'react';

const GameButton = ({ type, onButtonClick }) => {
  const Type = type[0].toUpperCase() + type.slice(1);
  return (
    <button className="btn-game" name={`${type}Board`} onClick={onButtonClick}>
      {`${Type}`} Game
    </button>
  )
}

export default GameButton;
