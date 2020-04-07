import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles({
  mainContainer: {
    background: "#f5f0f0",
  },
});

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center">
          Resume
        </Typography>
        <Box component="div">
          <Typography variant="h2">this is</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
