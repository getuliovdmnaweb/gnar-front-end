import React from "react";
import { createUseStyles } from "react-jss";
import logo from "../../assets/logo.png";

const useStyles = createUseStyles({
  appBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: 30,
    fontFamily: "cursive",
    paddingLeft: 50,
    width: "100%",
    height: 60,
    backgroundColor: "#282C43",
    color: "white",
  },
});

const AppHeader = () => {
  const styles = useStyles();

  return (
    <div className={styles.appBar}>
      <img src={logo} alt="logo" />
      GNARBOX
    </div>
  );
};

export default AppHeader;
