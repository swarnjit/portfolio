import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    height: 100,
    backgroundColor: "lightblue",
  },
  copyright: {
    height: 40,
    backgroundColor: "darkblue",
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.footer}></Paper>
      <Paper className={classes.copyright}></Paper>
    </>
  );
};

export default Footer;
