import React, { useRef, useState, useEffect } from "react";

import axios from "axios";
import { useStyles } from "./styles";

const FormCard = ({ setYards }) => {
  const styles = useStyles();
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState();

  useEffect(() => {}, [file]);

  const handleInputName = (event) => {
    setFileName(event.target.value);
    console.log(event.target.value);
  };
  const handleInputFile = (event) => {
    inputRef.current.click(event);
  };

  const chooseFile = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadFile = () => {
    const newFile = new FormData();

    newFile.append("file", file);
    newFile.append("fileName", fileName);

    axios.post("http://localhost:8080/uploads", newFile, {}).then((res) => {
      setYards(res.data.allFiles);
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
          onChange={handleInputName}
        />
        <div className={styles.fileInput} onClick={handleInputFile}>
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
        <button onClick={uploadFile} className={styles.formButton}>
          SEND
        </button>
      </div>
    </div>
  );
};

export default FormCard;
