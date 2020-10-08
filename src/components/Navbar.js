import React, { useState } from "react";
import { Link } from "react-router-dom";
import RightMenu from "@material-ui/core/Drawer";
import PersonIcon from "@material-ui/icons/Person";
import {
  AppBar,
  Toolbar,
  IconButton,
  ListItem,
  ListItemIcon,
  Avatar,
  List,
  Divider,
  Typography,
  Box,
  ListItemText,
  Button,
  Hidden,
} from "@material-ui/core";
import {
  AssignmentInd,
  GitHub,
  Home,
  LinkedIn,
  PersonPinCircleOutlined,
} from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../images/me.png";

const useStyles = makeStyles((theme) => ({
  menuContainer: {
    width: 250,
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
  listItem: {
    color: "black",
  },
  list: {
    fontSize: "14px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit",
    float: "right",
  },
  navItem: {
    float: "left",
    color: "inherit",
    fontSize: "20px",
    position: "relative",
    display: "block",
    width: "auto",
    marginRight: "10px",
    justifyContent: "space-between",
    padding: "0",
    "&:hover,&:focus": {
      color: "lightblue",
      background: "transparent",
    },
  },
  navLink: {
    color: "lightblue",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "600",
    fontSize: "16px",
    textTransform: "capitalize",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "#1dbf73",
      background: "rgba(200, 200, 200, 0.2)",
    },
  },
  toolbar: {
    minHeight: "50px",
    flex: "1",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
    "@media (min-width: 576px)": {
      maxWidth: "540px",
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px",
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px",
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1140px",
    },
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSideMenu = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuContainer}
      component="div"
      onClick={toggleSideMenu(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="Swarnjit Chahal" />
      <Divider />
      <List>
        {menuItems.map((IsItem, key) => (
          <ListItem button key={key} component={Link} to={IsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {IsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={IsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="fixed" style={{ background: "#333" }}>
          <Toolbar className={classes.toolbar}>
            <Hidden mdUp>
              <IconButton onClick={toggleSideMenu("right", true)}>
                <MenuIcon style={{ color: "orange", alignItems: "left" }} />
              </IconButton>
              <RightMenu
                open={state.right}
                onClose={toggleSideMenu("right", false)}
              >
                {sideList("right")}
              </RightMenu>
            </Hidden>

            <Typography
              variant="h5"
              button
              style={{ color: "lightblue", textDecoration: "none" }}
              component={Link}
              to={"/"}
            >
              &#x3c;&#8725;&#x3e;Swarnjit's Portfolio
            </Typography>

            <Hidden smDown>
              <div className={classes.list}>
                <List>
                  <ListItem className={classes.navItem}>
                    <Button component={Link} to="/" className={classes.navLink}>
                      <GitHub />
                    </Button>
                  </ListItem>
                  <ListItem className={classes.navItem}>
                    <Button component={Link} to="/" className={classes.navLink}>
                      <LinkedIn />
                    </Button>
                  </ListItem>
                  <ListItem className={classes.navItem}>
                    <Button
                      component={Link}
                      to="/resume"
                      className={classes.navLink}
                    >
                      <PersonIcon />
                      Resume
                    </Button>
                  </ListItem>
                </List>
              </div>
            </Hidden>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Box>
    </>
  );
};

export default Navbar;
