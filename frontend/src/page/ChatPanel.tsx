import React, { useState, useEffect, useRef } from "react";
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
import Chat from "../component/chat";
import SendIcon from "@mui/icons-material/Send";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NavBar from "./NavBar";

import HorizontalTabs from "../component/layouts/horizontalTabs";
import Profile from "../component/profile";
import ChatField from "../component/chatField";

const dete = [
  {
    userOne: "1233",
    userTwo: "4321",
    text: "who are you to say this",
    date: "mar 3 ",
  },
  {
    userOne: "1233",
    userTwo: "4321",
    text: "wI am yohannes",
    date: "mar 3 1998",
  },
  {
    userOne: "1233",
    userTwo: "4321",
    text: "so that why you call me",
    date: "mar 3 1998",
  },
  {
    userOne: "1233",
    userTwo: "4321",
    text: "i wanna to talk you",
    date: "mar 3 1998",
  },
  {
    userOne: "1234",
    userTwo: "4321",
    text: "what do you talk to me ",
    date: "mar 3 1998",
  },
  {
    userOne: "1233",
    userTwo: "4321",
    text: "I will tell you when we meet,I will tell you when we meet,I will tell you when we meetI will tell you when we meet,I will tell you when we meet,I will tell you when we meetI will tell you when we meet,I will tell you when we meet,I will tell you when we meetI will tell you when we meet,I will tell you when we meet,I will tell you when we meet",
    date: "mar 3 1998",
  },
  {
    userOne: "1234",
    userTwo: "4321",
    text: "I don't think so",
    date: "mar 3 1998",
  },
  {
    userOne: "1234",
    userTwo: "4321",
    text: "ok",
    date: "mar 3 1998",
  },
  {
    userOne: "1233",
    userTwo: "4321",
    text: "ok",
    date: "mar 3 1998",
  },
  {
    userOne: "1235",
    userTwo: "4321",
    text: "I will tell you when we meet,I will tell you when we meet,I will tell you when we meet",
    date: "mar 3 1998",
  },
];
const ChatPanel = () => {
  const param = useParams();
  console.log("params", param);
  const [chatUserId, setChatUserId] = useState(
    param?.chatUserId ? param.chatUserId : null
  );

  const chatEndRef = useRef(null);

  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    if (param?.chatUserId) {
      setChatUserId(param?.chatUserId);
    }
  }, [param?.chatUserId]);
  useEffect(() => {
    setChatData(dete);
  }, []);

  useEffect(() => {
    chatEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [chatData]);
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
            height: {
              xs: "83vh",
              sm: "80vh",
            },
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
          {chatData.length > 0 &&
            chatData?.map((value, index) => <Chat data={value} />)}
          <div ref={chatEndRef} />
        </Box>
        <ChatField />
      </Grid>
    </Grid>
  );
};

export default ChatPanel;
