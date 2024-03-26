import { Box, TextField, Button, IconButton } from "@mui/material";
import Send from "@mui/icons-material/Send";
const ChatField = () => {
  return (
    <Box
      sx={{
        //   position: "absolute",
        //   bottom: "0px",
        backgroundColor: "white",
        display: "flex",
        height: {
          xs: "65px",
          sm: "10vh",
        },
        justifyContent: "center",
        padding: "0px",
        // paddingLeft: "20px",
        // paddingBottom: "100px",
        borderLeft: "1px solid #F4F4F4",
        zIndex: "999",
        alignItems: "center",
      }}
    >
      {/* <input
        placeholder="write something..."
        style={{
          height: "30px",
          padding: "20px",
          borderRadius: "20px",
          width: "50%",
          bottom: "0px",
        }}
      /> */}
      <Box
        sx={{
          //   padding: "50px",
          paddingLeft: {
            xs: "5px",
            sm: "10%",
            md: "20%",
          },
          paddingRight: {
            xs: "5px",
            sm: "10%",
            md: "20%",
          },
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <input
          placeholder="write something..."
          style={{
            borderRadius: "20px",

            width: "100%",
            height: "50px",
            padding: "20px",
          }}
        />
        <IconButton
          sx={{
            "&:focus": {
              outline: "none", // Remove outline on focus
            },
            height: "50px",
            borderBottomRightRadius: "20px",
            // borderBottomRightRadius: "20px",
            borderTopRightRadius: "20px",
            // borderTopRightRadius: "20px",
          }}
          variant="contained"
        >
          <Send
            color="primary"
            sx={{
              fontSize: "40px",
              "&:focus": {
                outline: "none", // Remove outline on focus
              },
            }}
          />
          {/* Send */}
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatField;
