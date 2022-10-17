import { Grid, Box } from "@mui/material";
import BasicTable from "./tableOrder";

export default function OrderContainer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={2}>
          <Box
            component="img"
            sx={{
              margin : 1,
              height: 490,
              width: 348,
            }}
            src="/images/menu.png"
          />
        </Grid>
        <Grid item xs={6} md={8}>
            <BasicTable />
        </Grid>
      </Grid>
    </Box>
  );
}
