import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Paper,
  TextField,
  IconButton,
} from "@mui/material";
import ContactList from "./ContactList";
import Chat from "./chat";
import SendIcon from "@mui/icons-material/Send";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NavBar from "./NavBar";
const ChatPanel = () => {
  return (
    <Grid
      container
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        right: "0px",
        overflow: "hidden",
        alignItems: "flex-start",
      }}
    >
      <Grid
        item
        xs={12}
        sm={4}
        sx={{
          height: "calc(100vh - 65px)", // Adjust based on your layout
          overflowY: "scroll",
          scrollbarWidth: "thin",
          mt: "65px",
        }}
        // style={{
        //   position: "relative",
        //   top: "65px",
        // }}
      >
        <ContactList />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          height: "calc(100vh)", // Adjust based on your layout
          overflowY: "scroll",
          scrollbarWidth: "thin",
        }}
        // style={{
        //   top: "0px",
        // }}
      >
        <Chat />
      </Grid>
    </Grid>
  );
};

export default ChatPanel;
