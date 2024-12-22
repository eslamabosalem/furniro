"use client";
import { redirect, useParams } from "next/navigation";
import furniture from "@/lib/furniture.json";
import { useEffect, useState } from "react";
import type { FurnitureType } from "@/lib/types";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import ProductGallery from "@/components/products/productDetailsPage/ProductGallery";
import ProductOrder from "@/components/products/productDetailsPage/ProductOrder";
import ProductMoreDetails from "@/components/products/productDetailsPage/ProductMoreDetails";
import AdditionalReviews from "@/components/products/productDetailsPage/AdditionalReviews";
import ProductCard from "@/components/products/ProductCard";

function ProductDetailsPage() {
  // Get Furniture ID That Customer Clicked On.
  const { id } = useParams();

  // Store The Furniture
  const [currentFurniture, setCurrentFurniture] = useState<
    FurnitureType | undefined
  >();

  // Filter Furniture List To Get Current One.
  useEffect(() => {
    const filterFurniture: FurnitureType[] = furniture.products.filter(
      (f) => +f.id === +id
    );

    setCurrentFurniture(filterFurniture[0]);

    // Redirect To Shop If User Try To Access Random ID
    if (filterFurniture.length == 0) {
      redirect("/shop");
    }
  }, [id]);

  if (currentFurniture)
    return (
      <>
        {/* Navigator */}
        <div className="head-nav bg-pink py-6">
          <div className="container flex gap-6 items-center">
            <div className="flex gap-4 items-center">
              <Link
                href="/"
                className="text-gray-500 hover:text-goldPrimary transition"
              >
                Home
              </Link>
              <FaChevronRight />
            </div>

            <div className="flex gap-4 items-center">
              <Link
                href="/shop"
                className="text-gray-500 hover:text-goldPrimary transition"
              >
                Shop
              </Link>
              <FaChevronRight />
            </div>

            {/* Current Furniture Name (2 Words Only) */}
            <div>{currentFurniture.title.split(" ").slice(0, 2).join(" ")}</div>
          </div>
        </div>
        {/* End Navigator */}
        {/* Product Show */}
        <div className="product-show pt-8 pb-16 border-b mb-14">
          <div className="container flex gap-20 max-lg:flex-col">
            {/* (Left) Gallery */}
            <ProductGallery currentFurniture={currentFurniture} />

            {/* (Right) Order */}
            <div className="product-show-right flex-1">
              <ProductOrder currentFurniture={currentFurniture} />
              <ProductMoreDetails currentFurniture={currentFurniture} />
            </div>
          </div>
        </div>
        {/* End Product Show */}
        {/* Additional Information And Reviews */}
        <AdditionalReviews currentFurniture={currentFurniture} />
        {/* End Additional Information And Reviews*/}
        {/* Related Products */}
        <div className="related-products py-16">
          <div className="container">
            <h3 className="text-center text-3xl">Related Products</h3>
            <ul className="flex justify-center gap-10 mt-8 flex-wrap">
              {furniture.products
                .filter(
                  (product) => product.tags[1] == currentFurniture.tags[1]
                )
                .map((related, index) => {
                  if (index < 4)
                    return (
                      <li key={index}>
                        <ProductCard
                          id={related.id}
                          title={related.title}
                          description={related.description}
                          price={related.price}
                          thumbnail={related.thumbnail}
                          discountPercentage={related.discountPercentage}
                        />
                      </li>
                    );
                })}
            </ul>
          </div>
        </div>
        {/* End Related Products */}
      </>
    );
}
export default ProductDetailsPage;
