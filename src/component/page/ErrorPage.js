import TopBar from "../Bar/topBar";
import BottomBar from "../Bar/bottomBar";
import { Box} from "@mui/system";
import { Divider, Stack, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <>
      <TopBar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <Stack>
            <Divider>Page not found!</Divider>
            <Typography variant="h1" style={{ color: "black" }}>
              404
            </Typography>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                size="small"
              >
                Back to home
              </Button>
            </Link>
          </Stack>
        </Box>
      <BottomBar />
    </>
  );
};

export default ErrorPage;
