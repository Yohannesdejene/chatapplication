import React, { useState } from "react";
import { Box, Grid, Avatar } from "@mui/material";
import axios from "axios";
import ContactList from "./ContactList";
const Contacts = () => {
  return (
    <Grid
      container
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        right: "0px",
        alignItems: "flex-start",
      }}
    >
      <Grid
        item
        xs={12}
        sm={4}
        sx={{ backgroundColor: "yellow", height: "89vh" }}
        style={{
          position: "relative",
          top: "65px",
          overflowY: "scroll",
          scrollbarWidth: "thin" /* Thin scrollbar */,
          scrollbarColor:
            "rgba(155, 155, 155, 0.5) #f4f4f4" /* Custom scrollbar color */,
          // minHeight: "100vh",
        }}
      >
        <ContactList />
      </Grid>

      <Grid
        item
        xs={0}
        sm={8}
        sx={{
          backgroundColor: "blue",

          backgroundImage: `url('background.png')`,
          backgroundSize: "cover", // Adjust the background size as needed
          backgroundPosition: "center",
          // position: "fixed",
        }}
      >
        <div
          style={{
            backgroundImage: `url('background.png')`,
            backgroundSize: "cover", // Adjust the background size as needed
            backgroundPosition: "center",
            height: "100vh",
          }}
        ></div>
      </Grid>
    </Grid>
  );
};
export default Contacts;
