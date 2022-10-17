import { BottomNavigation, Typography } from "@mui/material";

export default function BottomBar() {
  return (
    <BottomNavigation
      position="absolute"
      sx={{ backgroundColor: "black", bottom: 0,height: 36, display : 'flex', alignItems : 'center', justifyContent : 'center' }}
    >
      <Typography sx={{color : 'white'}}>Made by : Ryan Satria Y</Typography>
    </BottomNavigation>
  );
}
