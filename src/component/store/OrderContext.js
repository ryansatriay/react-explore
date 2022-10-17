import React, { useState } from "react";

const OrderCtx = React.createContext();

const OrderProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState([]);

  return (
    <OrderCtx.Provider
      value={{ selectedUser, setSelectedUser }}
    >
      {children}
    </OrderCtx.Provider>
  );
};

export { OrderCtx, OrderProvider };
