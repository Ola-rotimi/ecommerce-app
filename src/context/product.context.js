import { createContext, useState } from "react";

import SHOP_DATA from "../shop-data.json"

export const ProductContext = createContext({
  products: [],
  setProducts: () => {},
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products, setProducts };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
