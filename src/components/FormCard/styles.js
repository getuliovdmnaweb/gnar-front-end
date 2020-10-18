import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
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
