import React from "react";
import { useStyles } from "./styles";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const AppHeader = () => {
  const styles = useStyles();

  return (
    <div className={styles.appBar}>
      <Link style={{ textDecoration: "none", display: 'flex' }} to="/">
        <img src={logo} alt="logo" />
      </Link>
      GNARBOX
    </div>
  );
};

export default AppHeader;
