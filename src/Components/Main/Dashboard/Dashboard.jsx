import Cell from "./Cell";

import cells from "../../../cells.json";

import { onKeyDown } from "../../../handlers/onKeyDown";
import setHandlers from "../../../setHandlers";

import cellsEmpty from "../../../cells-empty.json";

export default function Dashboard({ mainClasses }) {
  setHandlers({
    elem: document,
    handler: "keydown",
    func: (e) => onKeyDown(e, cells),
  });

  console.log("render Dashboard");

  return (
    <div className={mainClasses.dashboard}>
      <div className={mainClasses.inner}>
        {cellsEmpty.map((cell, index) => {
          if (cells[index]) console.log(cells[index].char);

          return (
            <div className={mainClasses.cellWrapper} key={index}>
              <Cell
                key={index}
                mainClasses={mainClasses}
                size={cell.size}
                color={cell.color}
              >
                {cell.char}
              </Cell>
            </div>
          );
        })}
      </div>
    </div>
  );
}
