import { SG } from "./style-guide";

export const containers = {
  outer: {
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: SG.whiteColor
  },
  inner: {
    paddingLeft: "200px",
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: SG.accentColor,
    h1: {
      marginTop: "4vh",
      width: "750px",
      fontFamily: SG.headerFont,
      fontSize: "1.3em",
      color: SG.whiteColor,
      borderBottom: `2px solid ${SG.lightColor}`
    }
  }
};
