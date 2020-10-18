import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useStyles } from "./styles";

const IconButton = () => {
  const styles = useStyles();
  return (
    <button className={styles.iconButton}>
      <FontAwesomeIcon
        className={styles.icon}
        color="#00EC9D"
        icon={faSearch}
      />
      <p className={styles.iconButtonTitle}>SEE DETAILS</p>
    </button>
  );
};

export default IconButton;
