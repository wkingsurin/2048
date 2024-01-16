import classes from "./Main.module.scss";

import Dashboard from "./Dashboard/Dashboard";

export default function Main({ appClasses }) {
  return (
    <div className={`${classes.main} ${appClasses.container}`}>
      <Dashboard mainClasses={classes}></Dashboard>
    </div>
  );
}
