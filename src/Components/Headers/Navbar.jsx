import React from "react";
import { AppBar, Box, Button, Hidden, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";
import { useStyles } from "./HeaderStyle";
import { Link } from "react-scroll";

const Navbar = ({ navlinks, handleDrawerToggler }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.navbar}>
      <Toolbar className={classes.Toolbar}>
        <Typography variant="h5" component="h6">
          {"<Shehzad Khan />"}
        </Typography>
        <Box component={Hidden} xsDown>
          <Box>
            {navlinks.map((item, i) => (
              <Button
                key={i}
                className={classes.navlinks}
                activeClass="active"
                to={`${item.id}`}
                component={Link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                color="inherit"
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Box>
        <Box component={Hidden} smUp>
          <IconButton color="inherit" onClick={handleDrawerToggler}>
            <MenuOpenRoundedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
