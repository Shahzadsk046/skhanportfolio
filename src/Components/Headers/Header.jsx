import { Box, Typography } from "@material-ui/core";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import React, { useState } from "react";
import ReactTyped from "react-typed";
import { Decorator } from "../common/Common";
import DrawerComp from "./DrawerComp";
import { useStyles } from "./HeaderStyle";
import Navbar from "./Navbar";

const Header = () => {
  const classes = useStyles();
  const [initialState, setInitialState] = useState(false);

  const navlinks = [
    { label: "About", id: "About" },
    { label: "Portfolio", id: "Portfolio" },
    { label: "Contact", id: "Contact" },
  ];

  const handleDrawerToggler = () => {
    setInitialState(!initialState);
  };

  return (
    <Box className={classes.HeaderWrapper} id="Header">
      <Navbar navlinks={navlinks} handleDrawerToggler={handleDrawerToggler} />
      <DrawerComp
        initialState={initialState}
        navlinks={navlinks}
        handleDrawerToggler={handleDrawerToggler}
      />

      <Box className={classes.HeaderContainer}>
        <Typography
          variant="h3"
          // component="h6"
          className={classes.HeaderTitle}
        >
          Hi I'm a <span style={{ paddingRight: "5px" }}></span>
          <ReactTyped
            strings={[" Web Developer,", "UI/UX Designer,", "Digital Expert,"]}
            typeSpeed={30}
            backSpeed={50}
            loop
          />
        </Typography>
        <Typography variant="h3" component="h4" className={classes.HeaderDesc}>
          I Create Websites and Applications,
          <br /> Based on your Needs...
        </Typography>

        {Decorator({
          label: "About Us",
          withIcon: true,
          Icon: <ArrowDownwardRoundedIcon />,
        })}

        {/* <Box className={classes.decorator}>
            <Typography variant="span" className={classes.decoratorText}>
              About us
            </Typography>
            <Typography variant="span" className={classes.arrow}>
            </Typography>
          </Box> */}
      </Box>
    </Box>
  );
};

export default Header;
