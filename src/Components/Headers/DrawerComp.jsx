import React from "react";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { useStyles } from "./HeaderStyle";
import { Link } from "react-scroll";

export default function DrawerComp({
  initialState,
  navlinks,
  handleDrawerToggler,
}) {
  const classes = useStyles();
  return (
    <Drawer
      anchor="left"
      open={initialState}
      onClose={handleDrawerToggler}
      className={classes.drawer}
    >
      <Box className={classes.drawerContainer}>
        <List style={{ paddingTop: "80px" }}>
          {navlinks.map((item, i) => (
            <ListItem key={i} className={classes.listItem}>
              <ListItemText>
                <Button
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
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
