import { Box, Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { useStyles } from "./HeaderStyle";

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
        <List style={{paddingTop: "80px"}}>
          {navlinks.map((item, i) => (
            <ListItem key={i} className={classes.listItem}>
              <ListItemText>{item.label}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
