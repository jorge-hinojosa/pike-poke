import { SG } from "./style-guide";

export const homeCard = {
  // border: "1px solid white",
  marginTop: "50px",
  width: "250px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    cursor: "pointer"
  },
  img: {
    width: "150px",
    margin: "auto"
  },
  section: {
    h1: {
      width: "auto"
    },
    p: {
      marginLeft: "20px",
      fontFamily: SG.contentFont,
      fontSize: ".9em"
      // margin: "auto"
    },
    i: {
      color: SG.lightColor,
      marginRight: "10px"
    }
  }
};
