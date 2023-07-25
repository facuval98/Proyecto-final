import React, { useState, useContext, createContext } from "react";

export const CarritoContext = createContext();

export const CarritoContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  return (
    <CarritoContext.Provider value={{ carrito, setCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarritoContext = () => {
  const context = useContext(CarritoContext);
  if (!context)
    throw new Error(
      "useCarritoContext debe usarse dentro de un UserContextProvider"
    );
  return context;
};
