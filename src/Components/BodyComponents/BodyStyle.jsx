import { makeStyles } from "@material-ui/core";
import { Theme } from "../Theme";

export const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: Theme.colors.base1,
    padding: theme.spacing(10, 0, 8, 0),
  },

  divider: {
    width: "65px",
    height: "4px",
    backgroundColor: Theme.colors.primary,
  },
  
  responsiveImage: {
    width: "100%",
    maxHeight: "100vh",
    height: "auto",
  },
  
  sectionHeadingCont: {
    padding: theme.spacing(1),
    color: Theme.colors.base2,
  },
  
  sectionHeading: {
    color: Theme.colors.base2,
    margin: theme.spacing(2, 0),
},

sectionDesc: {
    color: Theme.colors.base2,
    margin: theme.spacing(2, 0),
  },

  AvatarCont: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  avatar: {
      backgroundColor: Theme.colors.primary,
      color: Theme.colors.base2,
  },

  MediaText:{
      color: Theme.colors.base2,
      padding: theme.spacing(2,0),
  },
  
  //   aboutBox: {
  //       margin: "20px"
  //   }
}));
