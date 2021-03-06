import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { Grid, ButtonBase, CardContent, Button } from "@material-ui/core";
import project1 from "../images/covidTracker.png";
import project2 from "../images/project2.jpg";
import project3 from "../images/project3.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  avatar: {
    backgroundColor: red[500],
  },
  projectSnapshot: {
    height: 0,
    paddingTop: "56.25%",
  },
  projectPreview: {
    margin: "10px 10px 10px 10px",
    minHeight: 400,
  },
  title: {
    fontSize: 14,
  },
  recentProjectsHeading: {
    fontWeight: "bolder",
    fontSize: 60,
    [theme.breakpoints.down("xs")]: {
      fontSize: 40,
    },
    borderBottom: "solid 5px lightblue",
  },
}));

export default function ProjectViewer() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Typography
            className={classes.recentProjectsHeading}
            align="center"
            gutterBottom
            variant="h2"
          >
            Recent Projects
          </Typography>
        </Grid>
        <Grid item md={12} xs={12}>
          <Grid container justify="center">
            <Grid
              item
              xs={12}
              md={3}
              component={Card}
              className={classes.projectPreview}
            >
              <ButtonBase
                onClick={() => window.open("https://www.trackcovid-19.online")}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      aria-label="Covid-19 Tracker"
                      className={classes.avatar}
                    >
                      T
                    </Avatar>
                  }
                  title="Covid-19 Tracker"
                  subheader="React.js, Material-UI"
                />
              </ButtonBase>
              <CardMedia className={classes.projectSnapshot} image={project1} />
              <CardContent>
                <Typography color="textPrimary" gutterBottom variant="h5">
                  Covid-19 Tracker
                </Typography>
                <Typography variant="subtitle2" align="justify">
                  This project is designed using React and Material-UI
                  components. Data is fetched from third party sources using
                  APIs. Data is updated about every 15 minutes or so.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() =>
                    window.open("https://www.trackcovid-19.online")
                  }
                >
                  Go to Project Website
                </Button>
              </CardActions>
            </Grid>

            <Grid
              item
              xs={12}
              md={3}
              component={Card}
              className={classes.projectPreview}
            >
              <ButtonBase
                onClick={() => window.open("https://www.bispari.com")}
              >
                <CardHeader
                  avatar={
                    <Avatar aria-label="Bispari" className={classes.avatar}>
                      B
                    </Avatar>
                  }
                  title="Connect with local businesses"
                  subheader="React.js, Spring Boot"
                />
              </ButtonBase>
              <CardMedia className={classes.projectSnapshot} image={project2} />
              <CardContent>
                <Typography color="textPrimary" gutterBottom variant="h5">
                  Bispari
                </Typography>
                <Typography variant="subtitle2" align="justify">
                  This project is designed using React and Material-UI
                  components. Backend is built using Spring Framework for java.
                  Data is stored using MySql and served to Front End through
                  APIs.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => window.open("https://www.bispari.com")}
                >
                  Go to Project Website
                </Button>
              </CardActions>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              component={Card}
              className={classes.projectPreview}
            >
              <ButtonBase
                onClick={() => window.open("https://www.bispari.com")}
              >
                <CardHeader
                  avatar={
                    <Avatar aria-label="Bispari" className={classes.avatar}>
                      B
                    </Avatar>
                  }
                  title="Photography Portfolio"
                  subheader="React.js Reactstrap, Material-UI"
                />
              </ButtonBase>
              <CardMedia className={classes.projectSnapshot} image={project3} />
              <CardContent>
                <Typography color="textPrimary" gutterBottom variant="h5">
                  Lenzz-Art
                </Typography>
                <Typography variant="subtitle2" align="justify">
                  This project is designed using React and Material-UI
                  components along with Reactstrap. Carousel was built to
                  showcase the photographer's work. Photographer can be
                  contacted using contact me form
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() =>
                    window.open("https://swarnjit.github.io/lenzz-art")
                  }
                >
                  Go to Project Website
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
