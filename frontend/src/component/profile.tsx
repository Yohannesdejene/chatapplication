import { Box, Button, Typography, Avatar } from "@mui/material";

const Profile = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        gap: "10px",
        padding: "5px",
        borderLeft: "1px solid #F4F4F4",
      }}
    >
      {1 === 1 ? (
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: "50px", height: "50px" }}
        />
      ) : (
        <Avatar sx={{ width: "50px", height: "50px" }}>N</Avatar>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "82%",
          paddingRight: "20px",
        }}
      >
        <Box
          sx={{
            mt: "2px",
            display: "flex",
            gap: {
              xs: "5%",
              sm: "8%",
            },
            // justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "roboto",
              fontWeight: "bold",
            }}
          >
            hiwot
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "roboto",
              mr: "10px",
            }}
          >
            mar 13
          </Typography>
        </Box>

        <Typography
          sx={{
            display: "flex",
            flexWrap: "none",
            fontSize: "16px",
            fontFamily: "roboto",
            textAlign: "justify",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          last seen mar 34
        </Typography>
      </Box>
    </Box>
  );
};
export default Profile;
