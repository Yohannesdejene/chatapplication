import { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import Test from "./test";

import LeftLayout from "./page/LeftLayout";
import ChatPanel from "./page/ChatPanel";
import NotFound from "./page/NotFound";
import NavBar from "./page/NavBar";
import Contacts from "./page/Contacts";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <NavBar />

      <Routes>
        <Route index path="/" element={<Contacts />} />
        <Route path="/chat" element={<ChatPanel />} />
        <Route path="/signup" element={<ChatPanel />} />
        <Route path="/contact" element={<Test />} />
        <Route path="/new" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
