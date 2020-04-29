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

      <Grid container>
        <Grid item md={3} component={Card} className={classes.headerIntro}>
          <Avatar
            className={classes.avatar}
            src={avatar}
            alt="Swarnjit Chahal"
          />
          <Typography variant="h5" align="center">
            Full Stack Software Developer(Java & React)
          </Typography>
          <Typography variant="subtitle1">
            Looking for open opportunities in and around GTA
          </Typography>
          <Box align="center">
            <Typography variant="h6" style={{ color: "lightblue" }}>
              email: swarnjitchahal@gmail.com
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
              variant="h4"
              align="center"
              style={{ color: "lightblue" }}
            >
              Work Experience & Education
            </Typography>
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
            <Typography align="justify">
              <b>
                Software Developer, SkipTheDishes Restaurant Services Inc (Feb
                2019 – Oct 2019)
              </b>
            </Typography>
            <Typography align="justify">
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
            <Typography
              variant="h5"
              style={{ fontWeight: "bold", margin: "10px 0 0 0" }}
              align="center"
            >
              Education
            </Typography>
            <Typography align="justify">
              <b>
                ComIT Organization, Winnipeg Java Programming (September 2018)
              </b>
            </Typography>
            <Typography align="justify">
              <ul>
                <li>
                  <b>Course Highlights</b>: Enterprise Application Development,
                  Security, Java Programming, IT Project Management, Database
                  Programming, Web Design, and Algorithm Design
                </li>
                <li>
                  <b>Project</b>: Past2Future, an online timeline web
                  application to add events from past and coming in future.
                  Developed using HTML, CSS3, JSP, MySQL database, JSTL and
                  other available tools like Java libraries.
                </li>
              </ul>
            </Typography>
            <Typography align="justify">
              <b>
                Red River College, Winnipeg, Manitoba Technology Management
                Post-Graduate Diploma (April 2016)
              </b>
            </Typography>
            <Typography align="justify">
              <ul>
                <li>
                  <b>Specific Courses:</b>: Managerial Communications, Project
                  Management Fundamentals, Managing Roles and Values
                </li>
                <li>
                  <b>Graduation Project:</b>Finding the reasons behind poor
                  battery life in smartphones
                </li>
              </ul>
            </Typography>
            <Typography align="justify">
              <b>
                SLIET University Longowal, Punjab, India Computer Science and
                Engineering (B.E) (June 2014)
              </b>
            </Typography>
            <Typography align="justify">
              <ul>
                <li>
                  <b>Specific Courses:</b>Object Oriented Programming,
                  Graduation Project, Networking and Communication Systems
                </li>
                <li>
                  <b>Graduation Project:</b>Iamreporter.in (News broadcasting
                  system where registered users are allowed to submit news from
                  their local area with a picture and story)
                </li>
              </ul>
            </Typography>
            <Typography align="justify">
              <b>
                Thapar Polytechnic, Patiala, Punjab, India Computer Science and
                Engineering (Diploma) (June 2010)
              </b>
            </Typography>
            <Typography align="justify">
              <ul>
                <li>
                  <b>Specific Courses:</b>Peripheral Devices, Microprocessor
                  8085, Basic Electrical &amp; Electronics Engineering, Software
                  Engineering
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
