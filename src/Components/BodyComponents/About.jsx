import { Box, Container, Grid, Hidden } from "@material-ui/core";
import React from "react";
import { useStyles } from "./BodyStyle";
import image from "../../images/About.jpg";
import { CardMedia, RenderSectionHeading } from "../common/Common";
import {
  ComputerOutlined,
  Dashboard,
  MobileFriendlyOutlined,
  ToysOutlined,
} from "@material-ui/icons";

const About = () => {
  const classes = useStyles();
  const cardMediaData = [
    {
      title: "Web Development",
      description:
        "creating business, e-commerce and any kind of website with beautiful designing",
      icon: <ComputerOutlined />,
    },
    {
      title: "Graphics Design",
      description:
        "creating beautiful designs of your business to reach customers",
      icon: <ToysOutlined />,
    },
    {
      title: "Mobile Apps",
      description:
        "creating mobile applications to grow your business through mobile users",
      icon: <MobileFriendlyOutlined />,
    },
    {
      title: "Marketing",
      description:
        "manage your marketing and reach your business to next level through social media and other marketing sites",
      icon: <Dashboard />,
    },
  ];
  return (
    <Box className={classes.section}>
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={5}>
            <Box component={Hidden} xsDown>
              <img
                src={image}
                alt="about us"
                className={classes.responsiveImage}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
            {/* <Box className={classes.aboutBox}> */}
            {RenderSectionHeading({
              smallText: "ABOUT ME",
              heading: "Hi I'm Shehzad Khan",
              description:
                "A self taught and motivated developer who loves to codes something that will impact majority of the people in good way!",
              // alignCenter: false,
            })}
            <br />
            {/* {CardMedia({
              label: "Label1",
              Desc: "Desc1",
              Icon: <AccessAlarm />,
            })} */}
            {/* </Box> */}
            <Grid container>
              {cardMediaData.map((item, i) => (
                <Grid item xs={12} sm={6} md={6} key={i}>
                  {CardMedia({
                    label: item.title,
                    Desc: item.description,
                    Icon: item.icon,
                  })}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
