import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../images/me.png";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: 8,
  },
  title: {
    color: "orange",
  },
  subtitle: {
    color: "lightblue",
    marginBottom: "3rem",
  },
  typedOutput: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Under Construction...."]} typeSpeed={40} />
      </Typography>
      <Box className={classes.typedOutput}>
        <Grid container justify="center">
          <Avatar
            className={classes.avatar}
            src={avatar}
            alt="Swarnjit Chahal"
          />
        </Grid>
        <Typography className={classes.title} variant="h4">
          <Typed strings={["Swarnjit Chahal"]} typeSpeed={40} />
        </Typography>
        <br />
        <Typography className={classes.subtitle} variant="h5">
          <Typed
            strings={["Java Developer", "React Developer"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </Typography>
      </Box>
    </>
  );
};

export default Header;
