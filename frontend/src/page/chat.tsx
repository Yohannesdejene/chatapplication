import { Box, Typography } from "@mui/material";
const Chat = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          minHeigh: "20px",
          backgroundColor: "white",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "left",
        }}
      >
        <Typography>mesege from hiwot dejene</Typography>
      </Box>
      <Box sx={{ minHeigh: "20px", backgroundColor: "#A8DAB6" }}>
        mesege from hiwot dejene
      </Box>
    </Box>
  );
};

export default Chat;
