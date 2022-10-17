import { AppBar, Typography } from "@mui/material";
import { OrderCtx } from "../store/OrderContext";
import { useContext } from "react";
const SuccessBar = () => {
  const { successMessage } = useContext(OrderCtx);
  return (
    <AppBar
      position="static"
      sx={{
        height: 32,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
      }}
    >
      <Typography>{successMessage}</Typography>
    </AppBar>
  );
};

export default SuccessBar;
