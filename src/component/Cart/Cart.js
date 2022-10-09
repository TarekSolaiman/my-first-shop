import React, { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../Main/Main";

const Cart = () => {
  const [carts, setcarts] = useContext(CartContext);

  return (
    <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-semibold">Your cart</h2>
      <ul className="flex flex-col divide-y divide-gray-700">
        {carts.map((product) => (
          <CartItem key={product.id} product={product}></CartItem>
        ))}
      </ul>
      <div className="space-y-1 text-right">
        <p>
          Total amount:
          <span className="font-semibold">357 €</span>
        </p>
        <p className="text-sm dark:text-gray-400">
          Not including taxes and shipping costs
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="px-6 py-2 border rounded-md dark:border-violet-400"
        >
          Back
          <span className="sr-only sm:not-sr-only">to shop</span>
        </button>
        <button
          type="button"
          className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
        >
          <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
