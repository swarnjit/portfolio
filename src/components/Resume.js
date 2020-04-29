import React from "react";
import {
  Grid,
  Typography,
  Avatar,
  Box,
  IconButton,
  Card,
} from "@material-ui/core";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../images/me.png";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  headerIntro: {
    background: "#fcf8f7",
    margin: "10px 10px 10px 10px",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
  resume: {
    background: "#fcf8f7",
    margin: "10px 10px 10px 10px",
  },
  typoMargin: {
    margin: "0 10px",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Typography variant="h4" align="center" style={{ color: "lightblue" }}>
        Work Experience & Education
      </Typography>
      <Grid container>
        <Grid item md={3} component={Card} className={classes.headerIntro}>
          <Avatar
            className={classes.avatar}
            src={avatar}
            alt="Swarnjit Chahal"
          />
          <Typography variant="h5" align="center">
            Full Stack Software Developer(Java & React) looking for open
            opportunities in and around GTA
          </Typography>
          <Box align="center">
            <Typography variant="h6" style={{ color: "Blue" }}>
              Connect with me
            </Typography>
            <IconButton
              aria-label="Linkedin.com"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/swarnjit-chahal-2239492a/"
                )
              }
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              aria-label="GitHub.com"
              onClick={() =>
                window.open("https://github.com/swarnjit/covid-19")
              }
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item md={8} component={Card} className={classes.resume}>
          <Box className={classes.typoMargin}>
            <Typography
              variant="h5"
              style={{ fontWeight: "bold" }}
              align="center"
            >
              Technologies
            </Typography>
            <Typography variant="subtitle1" align="justify">
              <b>Languages and Web technologies:</b> Java, J2EE, JSP, Servlet,
              React (With Redux) and Python (Jinja2), Material UI, HTML 5, CSS,
              JavaScript, Bootstrap4, Typescript
            </Typography>
            <Typography variant="subtitle1" align="justify">
              <b>Platforms:</b> Windows Operating Systems, Tomcat, Apache Web
              Server
            </Typography>
            <Typography variant="subtitle1" align="justify">
              <b>Databases:</b> MySQL, ElasticSearch and Memcache
            </Typography>
            <Typography variant="subtitle1" align="justify">
              <b>Tools:</b> Eclipse, IntelliJ, PyCharm, Postman, XAMPP,
              NetBeans, Visual Studio Code
            </Typography>
            <Typography variant="subtitle1" align="justify">
              <b>Agile and Version Control:</b> Git, Jira and other Atlassian
              tools
            </Typography>
            <Typography
              variant="h5"
              style={{ fontWeight: "bold", margin: "10px 0 0 0" }}
              align="center"
            >
              Work Experience
            </Typography>
            <Typography>
              <b>
                Software Developer, SkipTheDishes Restaurant Services Inc (Feb
                2019 – Oct 2019)
              </b>
            </Typography>
            <Typography>
              <ul>
                <li>Creating Full stack solutions (Java, React, Terraform)</li>
                <li> Support application throughout the software lifecycle</li>
                <li>
                  {" "}
                  Writing unit tests for every possible case scenario related to
                  the code
                </li>
                <li> REST APIs and Microservices</li>
                <li> Deployment (CI/CD) using Jenkins</li>
                <li>
                  {" "}
                  Incubator Team Captain for software developers in the training
                  program
                </li>
              </ul>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
