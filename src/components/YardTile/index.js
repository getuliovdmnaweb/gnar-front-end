import React from "react";
import { useStyles } from "./styles";
import IconButton from "../IconButton";

const YardTile = ({ fileName }) => {
  const styles = useStyles();
  return (
    <div className={styles.yardTile}>
      <div className={styles.tileRow}>
        <p>{fileName}</p>
        <IconButton />
      </div>
      <div className={styles.divider} />
    </div>
  );
};

export default YardTile;
