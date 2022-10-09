import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const Main = () => {
  const product = useLoaderData();
  const [carts, setcarts] = useState([]);
  // console.log(product);
  return (
    <ProductContext.Provider value={product}>
      <CartContext.Provider value={[carts, setcarts]}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default Main;
