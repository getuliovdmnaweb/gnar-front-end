import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  iconButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: 'white',
    border: 0,
    paddingLeft: 5,
    paddingRight: 5,
    "&:hover $iconButtonTitle, &:hover $icon": {
      color: "#282C43",
    },
  },
  iconButtonTitle: {
    fontSize: 16,
    fontWeight: "regular",
    color: "#00EC9D",
  },
  icon: {
    marginRight: 10,
  },
});