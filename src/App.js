import React, { useState, useEffect } from "react";
import axios from "axios";
import { createUseStyles } from "react-jss";
import { AppHeader, AppBody } from "./components";

const useStyles = createUseStyles({
  appContainer: {
    position: "absolute",
    backgroundColor: "#E5E5E5",
    height: "100%",
    width: "100%",
  },
});

function App() {
  const styles = useStyles();

  return (
    <div className={styles.appContainer}>
      <AppHeader />
      <AppBody />
    </div>
  );
}

export default App;
