import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#f5f0f0",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: theme.spacing(1),
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50%-5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "left",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "lightblue",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "lightblue",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "lightblue",
    padding: "0",
    textTransform: "uppercase",
  },
  details: {
    color: "#311",
  },
  company: {
    color: "#311",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Work Experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2019
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Full Stack Software Developer
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#311" }}
            >
              SkipTheDishes Restaurant Operations Inc.
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "#311" }}
            >
              Creating Full stack solutions (Java, React, Terraform) Support
              application throughout the software lifecycle Writing unit tests
              for every possible case scenario related to the code Worked on
              REST APIs and Microservices Deployment (CI/CD) using Jenkins
              Incubator Team Captain for new software developers in the training
              program
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Full Stack Software Developer
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#311" }}
            >
              SkipTheDishes Restaurant Operations Inc.
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "#311" }}
            >
              Creating Full stack solutions (Java, React, Terraform) Support
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2019
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Full Stack Software Developer
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#311" }}
            >
              SkipTheDishes Restaurant Operations Inc.
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "#311" }}
            >
              Creating Full stack solutions (Java, React, Terraform) Support
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
