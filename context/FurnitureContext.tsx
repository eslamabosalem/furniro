"use client";
import { createContext, Dispatch, SetStateAction } from "react";
import furniture from "@/lib/furnit
ure.json";
import { useState } from "react";

type ProductsProps = typeof furniture.products;

export type ProductsContextType = {
  products: ProductsProps;
  setProducts: React.Dispatch<React.SetStateAction<ProductsProps>>;
  productsPerPage: number;
  setProductsPerPage: Dispatch<SetStateAction<number>>;
  sortValue: string;
  setSortValue: Dispatch<SetStateAction<string>>;
};

export const ProductsContext = createContext<ProductsContextType | null>(null);

function FurnitureContext({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Products
  const [products, setProducts] = useState(furniture.products);

  // Products Per Page (For Pagination & Filter)
  const [productsPerPage, setProductsPerPage] = useState(8);

  // Sort Filter
  const [sortValue, setSortValue] = useState("");

  if (!ProductsContext) {
    return <div>There Is No Products..</div>;
  }

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
