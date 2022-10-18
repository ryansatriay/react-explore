import { BottomNavigation, Typography, Paper } from "@mui/material";

export default function BottomBar() {
  return (
    <Paper sx={{ positon: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        sx={{
          backgroundColor: "black",
          height: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ color: "white" }}>Made by : Ryan Satria Y</Typography>
      </BottomNavigation>
    </Paper>
  );
}
