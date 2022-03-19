import { makeStyles } from "@material-ui/core/styles";
import { Themes } from "../Themes";

// const Themes = {
//   colors: {
//     base1: "#1e464a !important",
//     base2: "#fff !important",
//     primary: "#0097a7 !important",
//     primary1: "#1e464a !important",
//   },
// };

export const bodyStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: Themes.colors.base1,
    padding: theme.spacing(10, 0, 8, 0),
  },
  sectionDark: {
    backgroundColor: Themes.colors.primary1,
    padding: theme.spacing(2, 0),
  },

  divider: {
    width: "65px",
    height: "4px",
    backgroundColor: Themes.colors.primary,
  },

  responsiveImage: {
    width: "100%",
    maxHeight: "100vh",
    height: "auto",
  },

  sectionHeadingCont: {
    padding: theme.spacing(1),
    color: Themes.colors.base2,
  },

  sectionHeading: {
    color: Themes.colors.base2,
    margin: theme.spacing(2, 0),
  },

  sectionDesc: {
    color: Themes.colors.base2,
    margin: theme.spacing(2, 0),
  },

  AvatarCont: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  avatar: {
    backgroundColor: Themes.colors.primary,
    color: Themes.colors.base2,
  },

  MediaText: {
    color: Themes.colors.base2,
    padding: theme.spacing(2, 0),
  },

  // Portfolio Section
  imageContainer: {
    position: "relative",
    "&:hover $imageOverlay": {
      opacity: 1,
    },
  },

  imageOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundColor: Themes.colors.primary,
    color: Themes.colors.base2,
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
    transition: "0.7s",
  },

  overlayTitle: {
    fontSize: "2rem",
    marginBottom: "16px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
    },
  },

  submitBtn: {
    backgroundColor: Themes.colors.primary,
    color: Themes.colors.base2,
    "&:hover": {
      backgroundColor: Themes.colors.primary1,
    },
  },

  // Footer Section
  footerContainer: {
    backgroundColor: Themes.colors.primary1,
    color: Themes.colors.base2,
    padding: theme.spacing(2),
    position: "relative",
  },

  iconButton: {
    position: "absolute !important",
    right: "5px !important",
    top: "-25px !important",
    backgroundColor: Themes.colors.primary,
    color: Themes.colors.base2,
  },
}));

// export default bodyStyles;
