import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    yardTile: {
      display: "flex",
      flexDirection: "column",
      color: "#282C43",
      fontSize: 16,
      fontWeight: "regular",
      fontFamily: "Montserrat",
    },
    divider: {
      display: "flex",
      height: 1,
      backgroundColor: "#282C43",
      width: "100%",
      opacity: 0.5,
    },
    tileRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });