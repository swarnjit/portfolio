import React, { useState } from "react";
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
  ListItemText
} from "@material-ui/core";
import {
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
  MenuOpenRounded
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import avatar from "../images/me.png";

const useStyles = makeStyles(theme => ({
  menuContainer: {
    width: 250,
    background: "#511",
    height: "50%"
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: 130,
    height: 130
  },
  listItem: {
    color: "lightblue"
  }
}));
const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume"
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio"
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts"
  }
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const classes = useStyles();

  const sideList = slider => (
    <Box
      className={classes.menuContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="Swarnjit Chahal" />
      <Divider />
      <List>
        {menuItems.map((IsItem, key) => (
          <ListItem button key={key}>
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
        <AppBar position="fixed" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <MenuOpenRounded style={{ color: "orange" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "lightblue" }}>
              Swarnjit's Portfolio
            </Typography>
            <RightMenu
              open={state.right}
              onClose={toggleSlider("right", false)}
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
