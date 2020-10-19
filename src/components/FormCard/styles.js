import { createUseStyles } from "react-jss";

export const useStyles =  createUseStyles({
  formCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    height: 160,
    borderRadius: 10,
    paddingLeft: 50,
    paddingRight: 50,
    marginBottom: 60,
  },
  formInputContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameInput: {
    height: 50,
    border: ({fileName}) =>
      fileName === "" ? "2px solid #282C43" : "2px solid #00EC9D",
    borderRadius: 5,
    color: ({fileName}) => (fileName === "" ? "#282C43" : "#00EC9D"),
    paddingLeft: 15,
    fontSize: 16,
    fontFamily: "Montserrat",
  },
  fileInput: {
    display: "flex",
    paddingLeft: 15,
    color: ({hasFile}) => (hasFile ? "#00EC9D" : "#282C43"),
    height: 50,
    width: 320,
    border: ({hasFile}) => (hasFile ? "2px solid #00EC9D" : "2px solid #282C43"),
    borderRadius: 5,
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
    },
    "&:active": {
      backgroundColor: "#282C43",
      border: "1px groove #282C43",
      color: "#00EC9D",
    },
  },

  formButtonContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  formButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    width: 150,
    borderRadius: 5,
    backgroundColor: "#00EC9D",
    border: "1px groove #00EC9D",
    color: "#282C43",
    fontWeight: "bold",
    "&:hover": {
      cursor: "pointer",
    },
    "&:active": {
      backgroundColor: "#282C43",
      border: "1px groove #282C43",
      color: "#00EC9D",
    },
  },
});
