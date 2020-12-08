// STAR MATCH - V8
import React,{useState} from 'react';
import Game from './Game';
import {utils} from './Math-utils'; 
  const PlayNumber = props => (
    <button
      className="number"
      style={{backgroundColor: colors[props.status]}}
      onClick={() => props.onClick(props.number, props.status)}
    >
      {props.number}
    </button>
  );
  
  const PlayAgain = props => (
      <div className="game-done">
        <div 
          className="message"
        style={{ color: props.gameStatus === 'lost' ? 'red' : 'green'}}
      >
          {props.gameStatus === 'lost' ? 'Game Over' : 'Nice'}
        </div>
        <button onClick={props.onClick}>Play Again</button>
      </div>
  );
  
  
  const StarMatch = () => {
      const [gameId, setGameId] = useState(1);
      return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)}/>;
  }
  
  // Color Theme
  const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
  };
  export default StarMatch;
 
