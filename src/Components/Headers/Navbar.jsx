import {
  AppBar,
  Box,
  Button,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";
import React from "react";
import { useStyles } from "./HeaderStyle";

const Navbar = () => {
  const classes = useStyles();

  const navlinks = [
    { label: "About", id: "About" },
    { label: "Portfolio", id: "Portfolio" },
    { label: "Contact", id: "Contact" },
  ];
  return (
    <AppBar position="fixed" className={classes.navbar}>
      <Toolbar className={classes.Toolbar}>
        <Typography variant="h5" component="h6">
          {"<Shehzad Khan />"}
        </Typography>
        <Box component={Hidden} xsDown>
          <Box>
            {navlinks.map((item, i) => (
              <Button key={i} className={classes.navlinks}>{item.label}</Button>
            ))}
          </Box>
        </Box>
        <Box component={Hidden} smUp>
          <IconButton color="inherit" onClick={()=>console.log("menu clicked")}>
              <MenuOpenRoundedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
