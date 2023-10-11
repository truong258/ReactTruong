import React, { useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calcalaterWiner } from "../../helper";
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNet] = useState(true);
  const winner = calcalaterWiner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;

    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNet((xIsNext) => !xIsNext);
  };
  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      <button onClick={handleResetGame}>ResetGame</button>
    </div>
  );
};

export default Game;
