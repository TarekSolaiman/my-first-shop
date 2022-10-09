import React from "react";

const Product = ({ product, handleAddtoCart }) => {
  // console.log(product);
  const { name, picture, price, category } = product;

  return (
    <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
      <img
        src={picture}
        alt=""
        className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
          {category}
        </span>
        <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
      </div>
      <p className="dark:text-gray-100">$ {price}</p>
      <br />
      <button
        onClick={() => handleAddtoCart(product)}
        type="button"
        className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
