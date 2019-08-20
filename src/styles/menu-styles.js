import { SG } from "./style-guide";

export const menuStyles = {
  headerContainer: {
    width: "200px",
    height: "100vh",
    position: "fixed",
    left: 0,
    top: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: SG.darkColor,
    fontFamily: SG.contentFont,
    boxShadow: SG.shadow
  },
  navContainer: {
    // border: "1px solid black",
    width: "180px",
    height: "98vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    h1: {
      // fontStyle: "italic",
      fontWeight: "bold",
      fontFamily: SG.headerFont,
      color: SG.lightColor
    },
    i: {
      marginRight: "10px",
      color: SG.lightColor
    }
  },
  navLinks: {
    // border: "1px solid black",
    listStyle: "none",
    paddingLeft: 0,
    width: "180px",
    height: "70px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    li: {
      marginLeft: "30px",
      display: "flex",
      flexDirection: "row",
      // justifyContent: "center"
      alignItems: "center",
      cursor: "pointer",
      "&:hover": {
        color: SG.accentColor
      }
    }
  }
};
