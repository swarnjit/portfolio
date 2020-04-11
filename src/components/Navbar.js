import React, { useState } from "react";
import { Link } from "react-router-dom";
import RightMenu from "@material-ui/core/Drawer";
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
} from "@material-ui/core";
import {
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
  MenuOpenRounded,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../images/me.png";

const useStyles = makeStyles((theme) => ({
  menuContainer: {
    width: 250,
    background: "#311",
    height: "30rem",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
  listItem: {
    color: "lightblue",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/portfolio",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/",
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
        <AppBar position="static" style={{ background: "#311" }}>
          <Toolbar>
            <IconButton onClick={toggleSideMenu("right", true)}>
              <MenuOpenRounded style={{ color: "orange" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "lightblue" }}>
              Swarnjit's Portfolio
            </Typography>
            <RightMenu
              open={state.right}
              onClose={toggleSideMenu("right", false)}
            >
              {sideList("right")}
            </RightMenu>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
