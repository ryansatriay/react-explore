import React, { useState } from "react";

const OrderCtx = React.createContext();

const OrderProvider = ({ children }) => {
  const [anyChange, setAnyChange] = useState(0);
  const [selectedOrder, setSelectedOrder] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <OrderCtx.Provider
      value={{
        anyChange,
        setAnyChange,
        selectedOrder,
        setSelectedOrder,
        successMessage,
        setSuccessMessage,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </OrderCtx.Provider>
  );
};

export { OrderCtx, OrderProvider };
