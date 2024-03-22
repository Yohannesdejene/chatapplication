import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Paper,
  TextField,
  IconButton,
} from "@mui/material";
import { useParams } from "react-router-dom";
import ContactList from "./ContactList";
import Chat from "./chat";
import SendIcon from "@mui/icons-material/Send";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NavBar from "./NavBar";

import HorizontalTabs from "../component/layouts/horizontalTabs";
import Profile from "../component/profile";

const ChatPanel = () => {
  const param = useParams();
  console.log("params", param);
  const [chatUserId, setChatUserId] = useState(
    param?.chatUserId ? param.chatUserId : null
  );
  useEffect(() => {
    if (param?.chatUserId) {
      setChatUserId(param?.chatUserId);
    }
  }, [param?.chatUserId]);
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
        xs={false}
        sm={4}
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
          height: "calc(100vh - 65px)",
          // overflowY: "scroll",
          scrollbarWidth: "thin",
          mt: "58px",
          padding: "10px",
        }}
      >
        {/* <ContactList /> */}

        <HorizontalTabs />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          height: "calc(100vh)", // Adjust based on your layout
          // overflowY: "scroll",
          // scrollbarWidth: "thin",
        }}

        // style={{
        //   top: "0px",
        // }}
      >
        {" "}
        <Profile />
        <Box
          sx={{
            height: "calc(100vh)", // Adjust based on your layout
            overflowY: "scroll",
            scrollbarWidth: "thin",
            backgroundColor: "red",
            backgroundImage: `url('/background.png')`,
            // backgroundImage: `url('https://www.shutterstock.com/shutterstock/photos/283356059/display_1500/stock-vector-vector-seamless-mobile-apps-pattern-with-music-chat-gallery-speaking-bubble-email-magnifying-glass-283356059.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center 100%", // Adjust the values to position the background image
            width: "100%",
          }}
        >
          {[1, 2, 3, 5, 5, 6, 6, 7, 7, 7, 7, 7, 78, 8, 8].map((value) => (
            <Chat />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ChatPanel;
