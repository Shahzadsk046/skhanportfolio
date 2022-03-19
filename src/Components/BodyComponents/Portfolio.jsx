import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { RenderSectionHeading } from "../common/Common";
import { useStyles } from "./BodyStyle";
import pf1 from "../../images/pf1.jpg";
import pf2 from "../../images/pf2.jpg";
import pf3 from "../../images/pf3.jpg";
import pf4 from "../../images/pf4.jpg";
import pf5 from "../../images/pf5.jpg";
import pf6 from "../../images/pf6.jpg";

const Portfolio = () => {
  const classes = useStyles();

  const portfolioData = [
    { url: pf1, title: "# Portfolio ", link: "" },
    { url: pf2, title: "# Portfolio ", link: "" },
    { url: pf3, title: "# Portfolio ", link: "" },
    { url: pf4, title: "# Portfolio ", link: "" },
    { url: pf5, title: "# Portfolio ", link: "" },
    { url: pf6, title: "# Portfolio ", link: "" },
  ];
  return (
    <Box className={classes.sectionDark} id="Portfolio">
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Grid item xs={12} sm={8}>
          {RenderSectionHeading({
            smallText: "Portfolio",
            heading: "Let's See My Work",
            alignCenter: true,
          })}
        </Grid>
      </Grid>
      {/* Image Section */}
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {portfolioData.map((item, i) => (
            <Grid item xs={6} sm={6} lg={3} key={i}>
              <Box className={classes.imageContainer}>
                <img
                  src={item.url}
                  alt={item.title}
                  className={classes.responsiveImage}
                />
                <Box className={classes.imageOverlay}>
                  <Typography className={classes.overlayTitle}>{item.title}</Typography>
                  <Button variant="contained">Visit</Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;
