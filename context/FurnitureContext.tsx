"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";
import furniture from "@/lib/furniture.json";

type ProductsProps = typeof furniture.products;

export type ProductsContextType = {
  products: ProductsProps;
  setProducts: Dispatch<SetStateAction<ProductsProps>>;
  productsPerPage: number;
  setProductsPerPage: Dispatch<SetStateAction<number>>;
  sortValue: string;
  setSortValue: Dispatch<SetStateAction<string>>;
};

export const ProductsContext = createContext<ProductsContextType | null>(null);

function FurnitureContext({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [products, setProducts] = useState(furniture.products);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [sortValue, setSortValue] = useState("");

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        productsPerPage,
        setProductsPerPage,
        sortValue,
        setSortValue,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default FurnitureContext;
