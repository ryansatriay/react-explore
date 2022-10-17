const UpdateForm = () => {
    return (
        <TableRow>
              <TableCell align="center">
                <TextField
                  id="orderName"
                  name="orderName"
                  type="name"
                  size="small"
                  onChange={(e) => setOrderName(e.target.value)}
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  id="price"
                  name="price"
                  type="name"
                  size="small"
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
    )
}

export default UpdateForm;