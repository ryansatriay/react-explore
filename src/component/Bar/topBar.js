import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Marquee from "react-fast-marquee";
import { OrderCtx } from "../store/OrderContext";
import { useContext } from "react";
import SuccessBar from "../notification/successNotification";
import ErrorBar from "../notification/errorNotification";

export default function TopBar() {
  const { successMessage, errorMessage } = useContext(OrderCtx);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Box
            component="img"
            sx={{
              height: 66,
              width: 374,
            }}
            src="/images/header-img.png"
          />
        </Toolbar>
      </AppBar>
      <AppBar position="static" sx={{ height: 40, alignItems : 'center', justifyContent : 'center' , backgroundColor : 'blue'}}>
          <Marquee style={{fontWeight : 'bold'}} gradient={false}>5% DISCOUNT ON ALL ESPRESSO BAR DRINKS!!! BUY NOW!</Marquee>
      </AppBar>
      {successMessage !== '' && <SuccessBar/>}
      {errorMessage !== '' && <ErrorBar/>}
    </Box>
  );
}
