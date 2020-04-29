import React from "react";
import { Typography, Avatar, Grid, Card, Paper } from "@material-ui/core";
import avatar from "../images/me.png";
import bg from "../images/bg.png";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: "60px 20px 0 0",
  },
  profile: {
    margin: "20px 0 0 0 ",
    maxWidth: 300,
  },
  title: {
    color: "white",
    marginRight: 10,
    marginLeft: 10,
  },
  subtitle: {
    color: "#4bffa5",
  },
  typedOutput: {
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
  strong: {
    color: "#4bffa5",
  },
  card: {
    margin: "10px",
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },

  header: {
    backgroundColor: lightBlue[500],
  },
  intro: {
    fontSize: 60,
    [theme.breakpoints.down("xs")]: {
      fontSize: 40,
    },
    color: "white",
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  introPaper: {
    backgroundColor: "black",
    opacity: 0.8,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div style={{ backgroundImage: `url(${bg}`, backgroundSize: "cover" }}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Card align="center" style={{ backgroundColor: "transparent" }}>
              <Avatar
                variant="rounded"
                className={classes.avatar}
                src={avatar}
                alt="Swarnjit Chahal"
                align="center"
              />
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            xs={12}
            container
            className={classes.introPaper}
            justify="center"
          >
            <Paper elevation={3} className={classes.introPaper}>
              <Typography variant="h2" className={classes.intro}>
                Full Stack Software Developer
              </Typography>
              <Typography
                className={classes.title}
                variant="subtitle1"
                align="center"
              >
                Hello, I am{" "}
                <strong className={classes.strong}>
                  Swarnjit Singh Chahal
                </strong>
                , Full Stack Software Developer based in GTA, Canada
              </Typography>
              <Typography
                className={classes.subtitle}
                variant="h5"
                align="center"
              >
                <Typed
                  strings={[
                    "I am <strong> Full Stack developer</strong>",
                    "I work on <strong>Java and React</strong>",
                    "I love to <strong>code</strong>",
                  ]}
                  typeSpeed={60}
                  backSpeed={60}
                  loop
                  className={classes.typedOutput}
                />
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
