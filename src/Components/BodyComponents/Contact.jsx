import React, { useState } from "react";
import { Box, Button, Container, Grid, Hidden } from "@material-ui/core";
import image from "../../images/About.jpg";
import { RenderSectionHeading } from "../common/Common";
import { RenderInputText } from "../common/Form";
import ScrollAnimation from "react-animate-on-scroll";
import { bodyStyles } from "./BodyStyle";

const Contact = () => {
  const classes = bodyStyles();
  const [state, setState] = useState({
    data: {
      firstName: "",
      email: "",
      message: "",
    },
    errors: {},
  });

  const handleOnChange = ({ target }) => {
    const { data, errors } = state;

    //  setting errors
    target.value.length < 3
      ? (errors[target.name] = `${target.name} atleast have 3 letters`)
      : (errors[target.name] = "");

    data[target.name] = target.value;
    setState({ data: data, errors: errors });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted, ", state.data);
    // api call to post data
  };

  return (
    <Box className={classes.section} id="Contact">
      <ScrollAnimation animateIn="fadeIn">
        <Container maxWidth="xl">
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
                smallText: "CONTACT ME",
                heading: "Seems To be interested",
                description:
                  "I hope you seen my Portfolio, if interested than feel free to contact me for your future projects",
              })}
              <br />
              <form onSubmit={handleSubmit}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                    {RenderInputText({
                      label: "First Name",
                      name: "firstName",
                      state: state,
                      onChange: handleOnChange,
                    })}
                  </Grid>
                  <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                    {RenderInputText({
                      label: "Email",
                      name: "email",
                      state: state,
                      onChange: handleOnChange,
                    })}
                  </Grid>
                  <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                    {RenderInputText({
                      label: "Message",
                      name: "message",
                      state: state,
                      onChange: handleOnChange,
                      multiline: true,
                      rows: 5,
                    })}
                  </Grid>
                  <Grid item xs={12} sm={8} style={{ marginBottom: "16px" }}>
                    <Button
                      variant="outlined"
                      type="submit"
                      fullWidth={true}
                      className={classes.submitBtn}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
};

export default Contact;
