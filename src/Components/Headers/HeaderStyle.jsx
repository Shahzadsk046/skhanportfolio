import { makeStyles } from "@material-ui/core";
import { Theme } from "../Theme";
import Image from "../../images/brandBanner.jpg";

export const useStyles = makeStyles((theme) => ({
  HeaderWrapper: {
    width: "100%",
    minHeight: "90vh",
    height: "auto",
    background: `linear-gradient(to bottom right, #303140, #00606473), url(${Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // backgroundColor: Theme.colors.base1,
  },
  HeaderContainer: {
    width: "85%",
    minHeight: "90vh",
    height: "auto",
    padding: "20px",
    color: Theme.colors.base2,
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    fontFamily: "roboto",
  },

  HeaderTitle: {
    fontSize: "3rem",
    margin: theme.spacing(1,0),
    textAlign: "left",
    [theme.breakpoints.down('sm')]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: "2rem",
    },
  },
  
  HeaderDesc: {
    fontSize: "2rem",
    margin: theme.spacing(1,0),
    [theme.breakpoints.down('sm')]: {
      fontSize: "1.6rem",
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: "1.3rem",
      margin: theme.spacing(2,0),
    },
  },

  navbar: {
    backgroundColor: Theme.colors.base1,
    color: Theme.colors.base2,
  },
  Toolbar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
  navlinks: {
    color: Theme.colors.base2,
  },

  // decorator
  decorator: {
    display: "flex",
    fontWeight: "bolder",
    fontFamily: "roboto",
    position: "relative",
    marginTop: "20px",
    "&:before": {
      width: "45px",
      height: "45px",
      backgroundColor: Theme.colors.primary,
      content: '""',
      borderRadius: "50%",
    },
  },

  decoratorText: {
    lineHeight: "45px",
    position: "absolute",
    left: "25px",
  },

  arrow: {
    lineHeight: "50px",
    position: "absolute",
    left: "95px",
    animationName: "upDown",
    animationDuration: "0.7s",
    animationIterationCount: "infinite",
  },

  // creating the animations
  "@global": {
    "@keyframes upDown": {
      "0%": {
        transform: "scale(1,1)",
        paddingTop: "0px",
      },
      "100%": {
        transform: "scale(1,2)",
        paddingTop: "10px",
      },
    },
  },
}));
