import { makeStyles } from "@material-ui/core";
import { Theme } from "../Theme";

export const useStyles = makeStyles(() => ({
  HeaderWrapper: {
    width: "100%",
    height: "90vh",
    backgroundColor: Theme.colors.base1,
  },
  navbar: {
      backgroundColor: Theme.colors.base1,
      color: Theme.colors.base2,
  },
  Toolbar: {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-between',
  },
  navlinks: {
      color: Theme.colors.base2,
  }
}));
