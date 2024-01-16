import { useEffect } from "react";

export const onKeyDown = (e, cells) => {
  switch (e.key) {
    case "ArrowUp":
      console.log(cells);
      break;

    case "ArrowRight":
      console.log(cells);
      break;

    case "ArrowDown":
      console.log(cells);
      break;

    case "ArrowLeft":
      console.log(cells);
      break;

    default:
      break;
  }
};
