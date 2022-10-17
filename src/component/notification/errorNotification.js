import { AppBar, Typography } from "@mui/material";
import { OrderCtx } from "../store/OrderContext";
import { useContext } from "react";
const ErrorBar = () => {
  const { errorMessage } = useContext(OrderCtx);
  return (
    <AppBar
      position="static"
      sx={{
        height: 32,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
      }}
    >
      <Typography sx={{color : 'white'}}>{errorMessage}</Typography>
    </AppBar>
  );
};

export default ErrorBar;
