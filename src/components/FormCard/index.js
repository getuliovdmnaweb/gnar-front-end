import React, { useRef, useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import axios from "axios";
const useStyles = createUseStyles({
  formCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    height: 160,
    borderRadius: 10,
    paddingLeft: 50,
    paddingRight: 50,
  },
  formInputContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameInput: {
    height: 50,
    border: "2px solid #282C43",
    borderRadius: 5,
    color: "#282C43",
    paddingLeft: 15,
    fontSize: 16,
    fontFamily: "Montserrat",
  },
  fileInput: {
    display: "flex",
    paddingLeft: 15,
    color: "#00EC9D",
    height: 50,
    width: 320,
    border: "2px solid #00EC9D",
    borderRadius: 5,
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#282C43",
    },
  },

  formButtonContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  formButton: {
    height: 50,
    width: 150,
    borderRadius: 5,
    backgroundColor: "#00EC9D",
    border: "1px solid #00EC9D",
    color: "#282C43",
    "&:hover": {
      opacity: 0.8,
    },
  },
});

const FormCard = () => {
  const styles = useStyles();
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);

  useEffect(() => {}, [file]);

  const handeInput = (event) => {
    inputRef.current.click(event);
  };

  const chooseFile = (event) => {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const uploadFile = () => {
    const newFile = new FormData();
    newFile.append("file", file);
    axios.post("http://localhost:8080/uploads", newFile, {}).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className={styles.formCard}>
      <div className={styles.formInputContainer}>
        <input
          className={styles.nameInput}
          type="text"
          name="name"
          placeholder="Name"
        />
        <div className={styles.fileInput} onClick={handeInput}>
          {file ? file.name : "Choose your Csv file"}
          <input
            onChange={chooseFile}
            style={{ display: "none" }}
            ref={inputRef}
            type="file"
            name="file"
          />
        </div>
      </div>
      <div className={styles.formButtonContainer}>
        <button className={styles.formButton}>SEND</button>
      </div>
    </div>
  );
};

export default FormCard;
