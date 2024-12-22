"use client";

import ProductCard from "@/components/products/ProductCard";
import {
  ProductsContext,
  ProductsContextType,
} from "@/context/FurnitureContext";
import { useContext, useEffect, useState } from "react";
import Pagination from "./Pagination";

function FurnitureProducts() {
  // Current Page (For Pagination)
  const [currentPage, setCurrentPage] = useState(1);

  // Make A Clone (New Array Of Needed Products To Show)
  const [productsOnPage, setProductsInPage] = useState<
    ProductsContextType["products"]
  >([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { productsPerPage }: any = useContext(ProductsContext);

  // Change Products => As Current Page
  useEffect(() => {
    const productsClone = [...products];
    const newProductsArr = productsClone.slice(
      firstProductIndex,
      lastProductIndex
    );

    setProductsInPage(newProductsArr);
  }, [currentPage, productsPerPage]);

  // Reset Current Page Every Time Products Per Page Changes
  useEffect(() => {
    setCurrentPage(1);
  }, [productsPerPage]);

  // Import Products From Context
  const productsContext = useContext(ProductsContext);
  // Check If There Are Products
  if (!productsContext) {
    return <div>No products available</div>;
  }
  // Destructure The Object
  const { products, sortValue } = productsContext;

  // First And Last Product Index (To Show Via Pagination Control - Take Slice From Products)
  const lastProductIndex = productsPerPage * currentPage;
  const firstProductIndex = lastProductIndex - productsPerPage;

  // Filter Logic
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (sortValue == "") {
      const newArr = [...products];
      setProductsInPage(newArr.slice(firstProductIndex, lastProductIndex));
    }

    if (sortValue == "discount") {
      const newArr = [...productsOnPage];
      setProductsInPage(
        newArr.sort((a, b) => a.discountPercentage - b.discountPercentage)
      );
    }

    if (sortValue == "rating") {
      const newArr = [...productsOnPage];
      setProductsInPage(newArr.sort((a, b) => b.rating - a.rating));
    }

    if (sortValue == "priceLH") {
      const newArr = [...productsOnPage];
      setProductsInPage(newArr.sort((a, b) => a.price - b.price));
    }

    if (sortValue == "priceHL") {
      const newArr = [...productsOnPage];
      setProductsInPage(newArr.sort((a, b) => b.price - a.price));
    }

    if (sortValue == "stock") {
      const newArr = [...productsOnPage];
      setProductsInPage(newArr.sort((a, b) => b.stock - a.stock));
    }
  }, [sortValue]);

  return (
    <section className="py-12">
      {/* Iterate Products */}
      <ul className="container flex flex-wrap gap-10 max-sm:gap-5 justify-center max-w-[1000px] mx-auto ">
        {productsOnPage.map((product) => {
          return (
            <li key={product.id} className="w-[200px] max-sm:w-[140px] !h-full">
              <ProductCard
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                thumbnail={product.thumbnail}
                discountPercentage={product.discountPercentage}
              />
            </li>
          );
        })}
      </ul>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        paginationLength={Math.ceil(products.length / productsPerPage)}
      />
    </section>
  );
}
export default FurnitureProducts;
