import React from "react";
import { Box, IconButton, Typography } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-scroll";
import { bodyStyles } from "../BodyComponents/BodyStyle";

const Footer = () => {
  const classes = bodyStyles();
  var date = new Date();
  return (
    <Box className={classes.footerContainer} id="Footer">
      <IconButton
        className={classes.iconButton}
        to="Header"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1200}
        component={Link}
      >
        <ArrowUpwardIcon />
      </IconButton>
      <Typography variant="body1" component="h4" align="center" color="inherit">
        Developed and designed with <FavoriteIcon style={{ color: "red" }} /> by
        Shehzad Khan, All Right reserved &copy; {date.getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
