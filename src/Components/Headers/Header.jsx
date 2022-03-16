import { Box, Typography } from "@material-ui/core";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import React from "react";
import { useStyles } from "./HeaderStyle";
import Navbar from "./Navbar";

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.HeaderWrapper}>
        <Navbar />
        <Box className={classes.HeaderContainer}>
          <Typography
            variant="h3"
            // component="h6"
            className={classes.HeaderTitle}
          >
            Hello I'm a Web Developer
          </Typography>
          <Typography
            variant="h3"
            component="h4"
            className={classes.HeaderDesc}
          >
            I Create Websites and Applications Based on your Needs...
          </Typography>

          <Box className={classes.decorator}>
            <Typography variant="span" className={classes.decoratorText}>
              About us
            </Typography>
            <Typography variant="span" className={classes.arrow}>
              <ArrowDownwardRoundedIcon />
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
