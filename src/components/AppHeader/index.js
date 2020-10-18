import React from "react";
import {useStyles} from './styles'
import logo from "../../assets/logo.png";


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
