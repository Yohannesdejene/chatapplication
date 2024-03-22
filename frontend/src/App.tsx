import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { Box, Grid } from "@mui/material";
import Test from "./test";

import LeftLayout from "./page/LeftLayout";
import ChatPanel from "./page/ChatPanel";

import NotFound from "./page/NotFound";
import NavBar from "./page/NavBar";
import Contacts from "./page/Contacts";
import Theme from "./theme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Router>
        {/* <NavBar /> */}

        <Routes>
          <Route
            index
            path="/"
            element={
              <div>
                <NavBar />
                <Contacts />
              </div>
            }
          />
          <Route
            path="/chat/:chatUserId"
            element={
              <div>
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                  }}
                >
                  <NavBar />
                </Box>
                <ChatPanel />
              </div>
            }
          />

          <Route path="/signup" element={<ChatPanel />} />
          <Route path="/contact" element={<Test />} />
          <Route path="/new" element={<Test />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
