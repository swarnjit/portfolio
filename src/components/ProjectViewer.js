import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import avatar from "../images/portfolio.png";
import {
  Grid,
  ButtonBase,
  Paper,
  CardContent,
  Button,
} from "@material-ui/core";
import project1 from "../images/covidTracker.png";

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
                  subheader="React Project using APIs"
                />
              </ButtonBase>
              <CardMedia className={classes.projectSnapshot} image={project1} />
              <CardContent>
                <Typography color="textPrimary" gutterBottom variant="h5">
                  Covid-19 Tracker
                </Typography>
                <Typography variant="subtitle2">
                  This project is designed using React and Material-UI
                  components. Data is fetched from third party sources using
                  APIs
                </Typography>
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
              </CardContent>
            </Grid>

            <Grid
              item
              xs={12}
              md={3}
              component={Card}
              className={classes.projectPreview}
            >
              <ButtonBase
                onClick={() => window.open("https://www.swarnjitchahal.com")}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      aria-label="Past-To-Future"
                      className={classes.avatar}
                    >
                      P
                    </Avatar>
                  }
                  title="Your life events timeline"
                  subheader="Full Stack Project"
                />
              </ButtonBase>

              <CardContent>
                <Typography>Under Construction</Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
