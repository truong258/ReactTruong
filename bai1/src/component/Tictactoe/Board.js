import React from "react";
import Cell from "./Cell";
//import { calcalaterWiner } from "../../helper";

const Board = (props) => {
  //   const cells = [null, null, null, "X", "X", "X", null, null, null];
  //   console.log(calcalaterWiner(cells));
  //console.log(props);

  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item === "X" ? "is-X" : item === "O" ? "is-O" : ""}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
