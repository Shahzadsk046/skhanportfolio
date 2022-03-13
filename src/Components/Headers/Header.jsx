import { Box } from "@material-ui/core";
import React from "react";
import { useStyles } from "./HeaderStyle";
import Navbar from "./Navbar";

const Header = () => {
  const classes = useStyles();
  return (
    <div>
        <Navbar />
      <Box className={classes.HeaderWrapper}>Header 1</Box>
    </div>
  );
};

export default Header;
