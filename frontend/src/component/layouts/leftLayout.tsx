import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

const LeftLayout = () => {
  const location = useLocation();

  // Define the paths for the signup and login pages
  const excludedPaths = ["/signup", "/login"];

  // Check if the current path is excluded
  const isExcluded = excludedPaths.some((path) =>
    location.pathname.includes(path)
  );

  if (isExcluded) {
    return null; // Do not render the navigation bar for signup and login pages
  }

  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem button component={Link} to="/home">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemText primary="About" />
        </ListItem>
        {/* Add more navigation items as needed */}
      </List>
    </Drawer>
  );
};

export default LeftLayout;
