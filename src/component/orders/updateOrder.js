import { OrderCtx } from "../store/OrderContext";
import { useContext, useEffect, useState } from "react";
import {
  TableRow,
  TableCell,
  Checkbox,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import axios from "axios";

const UpdateForm = () => {
  const { anyChange, setAnyChange, selectedOrder, setSelectedOrder, setSuccessMessage, setErrorMessage } =
    useContext(OrderCtx);
  const [orderName, setOrderName] = useState("");
  const [orderPrice, setOrderPrice] = useState("");
  const [promoCheck, setPromoCheck] = useState(false);

  console.log(selectedOrder);

  const updateOrder = (id) => {
    try {
      axios
        .put(`http://localhost:9000/orders/${id}`, {
          orderName: orderName,
          price: orderPrice,
          isDiscounted: promoCheck,
        })
        .then(
          setOrderName(""),
          setOrderPrice(""),
          setPromoCheck(false),
          setSelectedOrder([]),
          setAnyChange(anyChange + 1),
          setSuccessMessage('Berhasil Edit Data')
        );
    } catch (error) {
      setErrorMessage('Gagal Edit Data')
    }
  };
  const cancelUpdate = () => {
    setSelectedOrder([]);
    setAnyChange(anyChange + 1);
  };

  const getData = () => {
    setOrderName(selectedOrder.orderName);
    setOrderPrice(selectedOrder.price);
    setPromoCheck(selectedOrder.isDiscounted);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <TableRow>
      <TableCell align="center">
        <TextField
          id="orderName"
          name="orderName"
          type="name"
          size="small"
          value={orderName}
          onChange={(e) => setOrderName(e.target.value)}
        />
      </TableCell>
      <TableCell align="center">
        <TextField
          id="price"
          name="price"
          type="name"
          size="small"
          value={orderPrice}
          onChange={(e) => setOrderPrice(e.target.value)}
        />
      </TableCell>
      <TableCell align="center">
        <Checkbox
          id="promo"
          name="promo"
          size="small"
          checked={promoCheck === true ? "checked" : ""}
          onChange={(e) => setPromoCheck(!promoCheck)}
        />
      </TableCell>
      <TableCell align="center">
        <Stack
          spacing={5}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="text"
            size="small"
            onClick={() => updateOrder(selectedOrder.id)}
          >
            Update
          </Button>
          <Button variant="text" size="small" onClick={cancelUpdate}>
            Cancel
          </Button>
        </Stack>
      </TableCell>
    </TableRow>
  );
};

export default UpdateForm;
