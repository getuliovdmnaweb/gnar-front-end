import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useStyles } from "./styles";

const FormCard = ({ setYards }) => {
  const inputRef = useRef(null);
  const [hasFile, setHasFile] = useState(false);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const styles = useStyles({ fileName: fileName, hasFile: hasFile });

  const handleInputName = (event) => {
    setFileName(event.target.value);
  };
  const handleInputFile = (event) => {
    inputRef.current.click(event);
  };

  const chooseFile = (event) => {
    setFile(event.target.files[0]);
    setHasFile(true);
  };

  const uploadFile = () => {
    const newFile = new FormData();

    newFile.append("file", file);
    newFile.append("fileName", fileName);

    axios.post("http://localhost:8080/uploads", newFile, {}).then((res) => {
      setYards(res.data.allFiles);
      setFile(null);
      setFileName("");
      setHasFile(false);
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
          value={fileName}
          onChange={handleInputName}
        />
        <div className={styles.fileInput} onClick={handleInputFile}>
          {file ? file.name : "Choose your .csv file"}
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
          <span style={{ marginRight: 20 }}>SEND</span>

          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
};

export default FormCard;
