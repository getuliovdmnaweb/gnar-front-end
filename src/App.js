import React from "react";

import { createUseStyles } from "react-jss";
import { AppHeader, AppBody } from "./components";
import { Switch, Route, Link, Redirect } from "react-router-dom";

const useStyles = createUseStyles({
  appContainer: {
    position: "absolute",
    backgroundColor: "#E5E5E5",
    height: "100%",
    width: "100%",
  },
});

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/uploads" />
      </Route>
      <Route exact path="/uploads">
        <App />
      </Route>
    </Switch>
  );
}

const App = () => {
  const styles = useStyles();
  return (
    <div className={styles.appContainer}>
      <AppHeader />
      <AppBody />
    </div>
  );
};

export default AppRouter;
