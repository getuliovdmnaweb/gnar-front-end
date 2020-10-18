import React,{useState,useEffect} from "react";
import { createUseStyles } from "react-jss";
import FormCard from "../FormCard";
import axios from 'axios'

const useStyles = createUseStyles({
  container: {
    paddingLeft: 55,
    paddingRight: 55,

    backgroundColor: "#E5E5E5",
  },

  appBodyTitle: {
    color: "#282C43",
    marginBottom: 25,
  },
});

const AppBody = () => {
  const styles = useStyles();
  const [yards, setYards] = useState([]);
  useEffect(() => {
    const getYards = async () => {
      const response = await axios.get("http://localhost:8080/uploads");
      setYards(response.data);
    };
    getYards();
  }, [yards]);
  return (
    <div className={styles.container}>
      <h1 className={styles.appBodyTitle}>Import CSV</h1>
      <FormCard />
      <div>
      {JSON.stringify(yards)}
      </div>
    </div>
  );
};

export default AppBody;
