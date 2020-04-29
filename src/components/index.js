import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";
import ProjectViewer from "./ProjectViewer";
import Footer from "./Footer";

const useStyles = makeStyles({
  particles: {
    position: "absolute",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Particles
        canvasClassName={classes.particles}
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            size: {
              value: 8,
            },
            line_linked: {
              shadow: {
                enable: true,
                color: "lightblue",
                blur: 1,
              },
            },
            shape: {
              type: "circle",
              color: "lightblue",
            },
          },
        }}
      />
      <Header />
      <ProjectViewer />
      <Footer />
    </>
  );
};

export default Home;
