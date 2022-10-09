import React, { useContext, useState } from "react";
import Product from "../Product/Product";
import { CartContext, ProductContext } from "../Main/Main";
import { addToDB } from "../../layout/fakeDB";
import { toast } from "react-toastify";

const Shop = () => {
  const products = useContext(ProductContext);
  const [carts, setcarts] = useContext(CartContext);
  // const [carts, setcarts] = useState([]);
  console.log(carts);
  const handleAddtoCart = (product) => {
    // setcarts([...carts, product]);
    // addToDB(product.id);

    let newCart = [];
    const exsist = carts.find((cart) => cart.id === product.id);

    if (!exsist) {
      product.quantity = 1;
      newCart = [...carts, product];
    } else {
      const rest = carts.filter((cart) => cart.id !== product.id);
      exsist.quantity = exsist.quantity + 1;
      newCart = [...rest, exsist];
    }
    setcarts(newCart);
    addToDB(product.id);
    toast.success("THis is added", { autoClose: 500 });
  };
  return (
    <div className="grid lg:grid-cols-3 gap-5 my-10 container m-auto">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          handleAddtoCart={handleAddtoCart}
        ></Product>
      ))}
    </div>
  );
};

export default Shop;
