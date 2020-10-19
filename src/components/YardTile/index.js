import React from "react";
import { useStyles } from "./styles";
import IconButton from "../IconButton";
import { Link, useRouteMatch } from "react-router-dom";

const YardTile = ({ file }) => {
  const styles = useStyles();
  const { path } = useRouteMatch();
  return (
    <div className={styles.yardTile}>
      <div className={styles.tileRow}>
        <p>{file.fileName}</p>
        <Link style={{ textDecoration: "none" }} to={`${path}/${file.id}`}>
          <IconButton />
        </Link>
      </div>
      <div className={styles.divider} />
    </div>
  );
};

export default YardTile;
