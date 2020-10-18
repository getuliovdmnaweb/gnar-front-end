import React, { useState, useEffect } from "react";

import FormCard from "../FormCard";
import axios from "axios";
import YardTile from "../YardTile";
import { useStyles } from "./styles";

const AppBody = () => {
  const styles = useStyles();
  const [yards, setYards] = useState([]);
  useEffect(() => {
    const getYards = async () => {
      const response = await axios.get("http://localhost:8080/uploads");
      setYards(response.data);
    };
    getYards();
  }, [setYards]);

  return (
    <div className={styles.container}>
      <h1 className={styles.appBodyTitle}>Import CSV</h1>
      <FormCard setYards={setYards} />
      <div className={styles.listYards}>
        <p className={styles.title}>Name</p>
        <div className={styles.divider} />

        {yards.map((yard, index) => (
          <YardTile key={index} fileName={yard.fileName} />
        ))}
      </div>
    </div>
  );
};

export default AppBody;
