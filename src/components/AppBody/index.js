import React from "react";
import FormCard from "../FormCard";
import YardTile from "../YardTile";
import { useStyles } from "./styles";

const AppBody = ({ files, setFiles }) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <h1 className={styles.appBodyTitle}>Import CSV</h1>
      <FormCard setYards={setFiles} />
      <div className={styles.listYards}>
        <p className={styles.title}>Name</p>
        <div className={styles.divider} />

        {files.map((file, index) => (
          <YardTile key={index} file={file} />
        ))}
      </div>
    </div>
  );
};

export default AppBody;
