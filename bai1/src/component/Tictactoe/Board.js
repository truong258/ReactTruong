import React from "react";
import Cell from "./Cell";
import { calcalaterWiner } from "../../helper";

const Board = () => {
  const cells = [null, null, null, "X", "X", "X", null, null, null];
  console.log(calcalaterWiner(cells));

  return (
    <div className="game-board">
      {Array(9)
        .fill()
        .map((item, index) => (
          <Cell></Cell>
        ))}
    </div>
  );
};

export default Board;
