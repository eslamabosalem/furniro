"use client";
import { ProductsContext } from "@/context/FurnitureContext";
import { useContext } from "react";
import { FaFilter } from "react-icons/fa";

function Filter() {
  const productsContext = useContext(ProductsContext);

  if (!productsContext) {
    return <div>There Is No Products..</div>;
  }
  // Filter From Context
  const { productsPerPage, setProductsPerPage, sortValue, setSortValue } =
    productsContext;

  return (
    <section className="bg-pink py-4">
      <div className="container flex items-center justify-between gap-4 max-md:flex-col max-md:gap-6">
        {/* Left */}
        <div className="left flex items-center">
          <div className="filter flex items-center gap-2 cursor-pointer">
            <FaFilter />
            <span>Filter</span>
          </div>

          <div className="showing-details pl-6 ml-6 border-l border-l-black/40">
            Showing 1-16 of 32 results
          </div>
        </div>

        {/* Right */}
        <div className="right flex items-center gap-8 max-sm:flex-col max-sm:gap-6">
          <div className="show flex items-center gap-2">
            <span>Show</span>
            {/* Show Products Per Page */}
            <select
              onChange={(e) => setProductsPerPage(+e.target.value)}
              value={productsPerPage}
              name=""
              id=""
              className="py-2 px-3"
            >
              <option value="8">8</option>
              <option value="16">16</option>
              <option value="24">24</option>
              <option value="32">32</option>
            </select>
          </div>

          <div className="sort-by flex items-center gap-2">
            <span>Sort by</span>
            <select
              onChange={(e) => setSortValue(e.target.value)}
              value={sortValue}
              className="py-2 px-3"
            >
              <option value="">Default</option>
              <option value="discount">Discount: High to Low</option>
              <option value="rating">Avg: Customer rating</option>
              <option value="priceLH">Price: Low to high</option>
              <option value="priceHL">Price: High to Low</option>
              <option value="stock">Stock: High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Filter;
