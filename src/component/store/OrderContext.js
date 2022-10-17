import React, { useState } from "react";

const OrderCtx = React.createContext();

const OrderProvider = ({ children }) => {
  const [anyChange, setAnyChange] = useState(0);
  const [selectedOrder, setSelectedOrder] = useState([]);

  return (
    <OrderCtx.Provider
      value={{ anyChange, setAnyChange,selectedOrder, setSelectedOrder }}
    >
      {children}
    </OrderCtx.Provider>
  );
};

export { OrderCtx, OrderProvider };
