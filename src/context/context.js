import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const url = "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68";

export function AppProvider({ children }) {
  const [pizzaList, setPizzaList] = useState([]);
  const [cpyPizzaList, setCpyPizzaList] = useState([]);
  const [basket, setBasket] = useState([]);

  const fetchData = async () => {
    const data = await fetch(url);
    const response = await data.json();
    setPizzaList(response);
    setCpyPizzaList(response);
  };

  const clearCart = () => {
    setBasket([]);
  };

  const removeItem = (id) => {
    const newItem = basket.filter((order) => order.id !== id);
    setBasket([...newItem]);
  };

  const total = basket.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  useEffect(() => {
    fetchData();
  }, []);

  const value = {
    pizzaList,
    cpyPizzaList,
    setPizzaList,
    setBasket,
    basket,
    clearCart,
    removeItem,
    total,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext };
