import React, { useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calcalaterWiner } from "../../helper";
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNet] = useState(true);
  const winner = calcalaterWiner(board);
  const handleClick = () => {};
  return (
    <div>
      <Board cells={board} onclick={handleClick}></Board>
    </div>
  );
};

export default Game;
