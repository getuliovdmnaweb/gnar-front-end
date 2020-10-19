import React, { useEffect, useState } from "react";

import { createUseStyles } from "react-jss";
import { AppHeader, AppBody, BasicTable } from "./components";
import {
  Switch,
  Route,
  useRouteMatch,
  useParams,
  Redirect,
} from "react-router-dom";
import Axios from "axios";

const useStyles = createUseStyles({
  appContainer: {
    backgroundColor: "#E5E5E5",
    height: "100vh",
  },
  detailBody: {
    backgroundColor: "#E5E5E5",
    height: "100%",
    paddingLeft: 50,
    paddingRight: 50,
  },
  detailTitle: {
    color: "#282C43",
    fontWeight: "bold",
    fontFamily: "Montserrat",
  },
  formCard: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    backgroundColor: "white",
    height: 160,
    borderRadius: 10,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 15,
    marginBottom: 60,
  },
});

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/uploads" />
      </Route>
      <Route path="/uploads">
        <App />
      </Route>
    </Switch>
  );
};

const DetailsCard = ({ files }) => {
  const styles = useStyles();
  const [detailFile, setDetailFile] = useState([]);
  const { uploadId } = useParams();
  const selectedFile = detailFile.find(
    (file) => file.id === parseInt(uploadId)
  );

  useEffect(() => {
    const getDetails = async () => {
      const response = await Axios.get(
        `http://localhost:8080/uploads/${uploadId}`
      );
      setDetailFile(response.data);
    };
    getDetails();
  }, [setDetailFile, uploadId]);

  return (
    <div className={styles.appContainer}>
      <AppHeader />
      <div className={styles.detailBody}>
        <h1 className={styles.detailTitle}>{selectedFile?.fileName}</h1>
        <BasicTable details={selectedFile?.details} />
      </div>
    </div>
  );
};

const App = () => {
  const styles = useStyles();
  const { path } = useRouteMatch();
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const getYards = async () => {
      const response = await Axios.get("http://localhost:8080/uploads");
      setFiles(response.data);
    };
    getYards();
  }, [setFiles]);

  console.log("Path", path);

  return (
    <Switch>
      <Route exact path={path}>
        <div className={styles.appContainer}>
          <AppHeader />
          <AppBody files={files} setFiles={setFiles} />
        </div>
      </Route>
      <Route path={`${path}/:uploadId`}>
        <DetailsCard files={files} />
      </Route>
    </Switch>
  );
};

export default AppRouter;
