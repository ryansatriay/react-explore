import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Divider, Stack, TextField, Checkbox, Button } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
];

export default function BasicTable() {
  return (
    <Stack spacing={1}>
      {/* ForInput */}
      <Paper>
        <TableContainer>
          <Table size="small" aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#0077b6" }}>
                <TableCell
                  sx={{ color: "white", fontWeight: "bold" }}
                  align="center"
                >
                  Order Item
                </TableCell>
                <TableCell
                  sx={{ color: "white", fontWeight: "bold" }}
                  align="center"
                >
                  Price
                </TableCell>
                <TableCell
                  sx={{ color: "white", fontWeight: "bold" }}
                  align="center"
                >
                  On 5% Promo?
                </TableCell>
                <TableCell
                  sx={{ color: "white", fontWeight: "bold" }}
                  align="center"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableRow>
              <TableCell align="center">
                <TextField
                  id="order_item"
                  name="order_item"
                  // label="Order item"
                  // InputLabelProps={{ shrink: true }}
                  type="name"
                  size="small"
                  // value={setValue('email', contactEmail )}
                  // {...register("email", { required: true })}
                  // onChange={(e) => setContactEmail(e.target.value)}
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  id="price"
                  name="price"
                  // label="Order item"
                  // InputLabelProps={{ shrink: true }}
                  type="name"
                  size="small"
                  // value={setValue('email', contactEmail )}
                  // {...register("email", { required: true })}
                  // onChange={(e) => setContactEmail(e.target.value)}
                />
              </TableCell>
              <TableCell align="center">
                <Checkbox />
              </TableCell>
              <TableCell align="center">
                <Button variant="contained" size="small">
                  Place Order
                </Button>
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </Paper>
      <Divider>List Order Item</Divider>
      {/* Table */}
      <Paper>
        <TableContainer>
          <Table size="small" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={4}>
                  Attending Clerk :
                </TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: "#0077b6" }}>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Order Item
                </TableCell>
                <TableCell
                  sx={{ color: "white", fontWeight: "bold" }}
                  align="center"
                >
                  Price
                </TableCell>
                <TableCell
                  sx={{ color: "white", fontWeight: "bold" }}
                  align="center"
                >
                  On 5% Promo
                </TableCell>
                <TableCell
                  sx={{ color: "white", fontWeight: "bold" }}
                  align="center"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  <TableCell align="center">
                    <Stack
                      spacing={5}
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Button variant="text" size="small">
                        Edit
                      </Button>
                      <Button variant="text" size="small">
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={4} align="center">
                  Total Regular Bill :{" "}
                </TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: "#caf0f8" }}>
                <TableCell colSpan={4} align="center">
                  Total Discount Bill :{" "}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Stack>
  );
}
