import React from "react";
import { Typography, Avatar, Grid, Box, Paper } from "@material-ui/core";
import avatar from "../images/me.png";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/styles";
import ProjectViewer from "./ProjectViewer";

const useStyles = makeStyles(theme => ({
  avatar: {
    width: 120,
    height: 120,
    marginTop: 50
  },
  title: {
    color: "orange"
  },
  subtitle: {
    color: "lightblue",
    marginBottom: "3rem"
  },
  typedOutput: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    textAlign: "center",
    zIndex: -1
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedOutput}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Swarnjit Chahal" />
      </Grid>
      <Grid>
        <Typography className={classes.title} variant="h4">
          <Typed strings={["Swarnjit Chahal"]} typeSpeed={40} />
        </Typography>
        <Typography className={classes.subtitle} variant="h4">
          <Typed
            strings={["Java Developer", "React Developer"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </Typography>
      </Grid>
      <Paper>
        <Typography variant="h3" style={{ color: "lightblue" }}>
          Projects crafted by me
        </Typography>
        <Grid container spacing={5}>
          <Grid item md={3}>
            <ProjectViewer />
          </Grid>
          <Grid item md={3}>
            <ProjectViewer />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Header;
