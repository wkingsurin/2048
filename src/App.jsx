import classes from "./App.module.css";
import "normalize.css";

import Main from "./Components/Main/Main";

export default function App() {
  console.log("render App");

  return (
    <div className={classes.wrapper}>
      <Main appClasses={classes}></Main>
    </div>
  );
}
