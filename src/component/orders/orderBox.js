import { Grid, Box, Paper } from "@mui/material";
import BasicTable from "./tableOrder";

export default function OrderBox() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container >
        <Grid item xs={4} md={4}>
          <Paper
            component="img"
            sx={{
              marginLeft: 1,
              marginY: 1,
              height: 490,
              width: 348,
            }}
            src="./images/menu.png"
          />
        </Grid>
        <Grid item xs={8} md={8}>
          <Paper sx={{marginY : 1, marginRight :1 }}>
            <BasicTable />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
