import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles({
  particles: {
    position: "absolute"
  }
});

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Divider />
      <Header />
      <Particles
        canvasClassName={classes.particles}
        params={{
          particles: {
            number: {
              value: 45
            },
            line_linked: {
              shadow: {
                enable: true,
                color: "orange",
                blur: 1
              }
            }
          }
        }}
      />
    </>
  );
};

export default Home;
