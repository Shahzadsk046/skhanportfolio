import { makeStyles } from "@material-ui/core";
import { Theme } from "../Theme";

export const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: Theme.colors.base1,
    padding: theme.spacing(10, 0, 8, 0),
  },
  sectionDark: {
    backgroundColor: Theme.colors.primary1,
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

  MediaText: {
    color: Theme.colors.base2,
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
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.base2,
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
}));
