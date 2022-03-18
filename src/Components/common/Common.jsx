import { Avatar, Box, Grid, Typography } from "@material-ui/core";
// import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import React from "react";
import { useStyles } from "../Headers/HeaderStyle";
import { useStyles as bodyStyles } from "../BodyComponents/BodyStyle";

export const Decorator = ({ label, withIcon, Icon, styles }) => {
  const classes = useStyles();
  return (
    <Box className={classes.decorator} style={styles}>
      <Typography component="span" className={classes.decoratorText}>
        {label}
      </Typography>
      {withIcon ? (
        <Typography component="span" className={classes.arrow}>
          {Icon}
        </Typography>
      ) : null}
    </Box>
  );
};

export const Divider = () => {
  const classes = bodyStyles();
  return (
    <Typography
      variant="span"
      component="h6"
      className={classes.divider}
    ></Typography>
  );
};

export const RenderSectionHeading = ({
  smallText,
  heading,
  description,
  alignCenter,
}) => {
  const classes = bodyStyles();
  return (
    <Box className={classes.sectionHeadingCont}>
      {Decorator({
        label: smallText,
        withIcon: false,
        styles: alignCenter ? { width: "100px", margin: "10px auto" } : {},
      })}
      <Typography
        variant="h4"
        align={alignCenter ? "center" : "left"}
        className={classes.sectionHeading}
      >
        {heading}
      </Typography>

      {Divider()}

      <Typography
        variant="body1"
        component="h6"
        className={classes.sectionDesc}
      >
        {description}
      </Typography>
    </Box>
  );
};

export const CardMedia = ({label, Desc, Icon, key}) => {
  const classes = bodyStyles();
  return (
    <Grid container style={{marginTop: "10px"}}>
      <Grid item xs={3} className={classes.AvatarCont}>
        <Avatar className={classes.avatar}>{Icon}</Avatar>
      </Grid>
      <Grid item xs={9} className={classes.MediaText}>
          <Typography variant="body1" component="h6">{label}</Typography>
          <Typography variant="caption">{Desc}</Typography>
      </Grid>
    </Grid>
  );
};
