import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Divider, Stack, TextField, Checkbox, Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

export default function BasicTable() {
  const [ordersData, setOrdersData] = useState([]);
  const [regBill, setRegBill] = useState([]);
  const [discBill, setDiscBill] = useState([]);
  const [orderName, setOrderName] = useState('');
  const [orderPrice, setOrderPrice] = useState('');
  const [promoCheck, setPromoCheck] = useState(false);

  const getRegBill = () => {
    axios
      .get("http://localhost:9000/regbill")
      .then((response) => setRegBill(response.data));
  };

  const getDiscBill = () => {
    axios
      .get("http://localhost:9000/discbill")
      .then((response) => setDiscBill(response.data));
  };

  const getData = () => {
    try {
      axios
        .get("http://localhost:9000/orders")
        .then((response) => setOrdersData(response.data));
    } catch (error) {
      console.log(error.response);
    }
  };

  // const addOrderS  = () => {
  //   console.log(orderName)
  //   console.log(orderPrice)
  //   console.log(promoCheck)
  // }

  const addOrder = (event) => {
    try {
      axios
        .post(`http://localhost:9000/add` , {
          orderName: orderName,
          price: orderPrice,
          isDiscounted:promoCheck
        })
        .then(
          setOrderName(''),
          setOrderPrice(''),
          setPromoCheck(false)
        );
    } catch (error) {}
    event.preventDefault()
  };

  const deleteOrder = (id) => {
    try {
      axios.delete(`http://localhost:9000/delete/${id}`);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    // Update the document title using the browser API
    getData();
    getRegBill();
    getDiscBill();
  }, []);

  let regularBill = Number(regBill.data).toFixed(2);
  let discountedBill = Number(discBill.data).toFixed(2);

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
                  id="orderName"
                  name="orderName"
                  // label="Order item"
                  // InputLabelProps={{ shrink: true }}
                  type="name"
                  size="small"
                  // value={setValue('email', contactEmail )}
                  // {...register("email", { required: true })}
                  onChange={(e) => setOrderName(e.target.value)}
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
                  onChange={(e) => setOrderPrice(e.target.value)}
                />
              </TableCell>
              <TableCell align="center">
                <Checkbox 
                  id="promo"
                  name="promo"
                  size="small"
                  onChange={(e) => setPromoCheck(!promoCheck)}
                />
              </TableCell>
              <TableCell align="center">
                <Button variant="contained" size="small" onClick={addOrder}>
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
              {ordersData.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.orderName}
                  </TableCell>
                  <TableCell align="center">${row.price}</TableCell>
                  <TableCell align="center">
                    {row.isDiscounted && <Checkbox disabled checked />}
                    {!row.isDiscounted && <Checkbox disabled />}
                  </TableCell>
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
                      <Button
                        variant="text"
                        size="small"
                        onClick={() => deleteOrder(row.id)}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={4} align="center">
                  Total Regular Bill : {regularBill}
                </TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: "#caf0f8" }}>
                <TableCell colSpan={4} align="center">
                  Total Discount Bill :{discountedBill}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Stack>
  );
}
