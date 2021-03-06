import { makeStyles } from "@material-ui/core/styles";
import { Themes } from "../Themes";
import Image from "../../images/brandBanner.jpg";

// const Themes = {
//   colors: {
//     base1: "#1e464a !important",
//     base2: "#fff !important",
//     primary: "#0097a7 !important",
//     primary1: "#1e464a !important",
//   },
// };

export const useStyles = makeStyles((theme) => ({
  HeaderWrapper: {
    width: "100%",
    minHeight: "90vh",
    height: "auto",
    background: `linear-gradient(to bottom right, #303140, #00606473), url(${Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  HeaderContainer: {
    width: "85%",
    minHeight: "90vh",
    height: "auto",
    padding: "20px",
    color: Themes.colors.base2,
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    fontFamily: "roboto",
  },

  HeaderTitle: {
    fontSize: "3rem",
    margin: theme.spacing(1, 0),
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },

  HeaderDesc: {
    fontSize: "2rem",
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.7rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.4rem",
      margin: theme.spacing(2, 0),
    },
  },

  navbarContainer: {
    backgroundColor: Themes.colors.base1,
    color: Themes.colors.base2,
  },
  Toolbar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
  navlinks: {
    color: Themes.colors.base2,
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
      backgroundColor: Themes.colors.primary,
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

  // Drawer Style
  drawer: {
    width: "250px",
    height: "100vh",
  },

  drawerContainer: {
    width: "250px",
    height: "100vh",
    backgroundColor: Themes.colors.primary1,
  },

  listItem: {
    color: Themes.colors.base2,
  },
}));
