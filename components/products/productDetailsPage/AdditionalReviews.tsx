"use client";
import { FurnitureType } from "@/lib/types";
import { useState } from "react";
import StarRatings from "react-star-ratings";

type CurrentFurnitureType = {
  currentFurniture: FurnitureType;
};

function AdditionalReviews({ currentFurniture }: CurrentFurnitureType) {
  const [activeTab, setActiveTab] = useState("additional");

  return (
    <section className="pb-16 border-b">
      <div className="container">
        {/* Header */}
        <div className="section-header flex justify-center gap-8">
          <button
            onClick={() => setActiveTab("additional")}
            className={`text-2xl text-black/40 ${
              activeTab === "additional" && "!text-black"
            }`}
          >
            Additional Information
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`text-2xl text-black/40 w-60 ${
              activeTab === "reviews" && "!text-black"
            }`}
          >
            Reviews [{currentFurniture.reviews.length}]
          </button>
        </div>

        {/* Body */}
        <div className="section-body mt-16 lg:px-28 mx-auto">
          {/* Additional Body */}
          <div
            className={`additional-body  hidden ${
              activeTab === "additional" && "!block"
            }`}
          >
            <div className=" mb-[6px]">
              <span className="inline-block w-48 max-lg:w-40">
                Availability Status
              </span>
              <span className="text-gray-500">
                : {currentFurniture.availabilityStatus}
              </span>
            </div>
            <div className=" mb-[6px]">
              <span className="inline-block w-48 max-lg:w-40">Brand</span>
              <span className="text-gray-500">: {currentFurniture.brand}</span>
            </div>
            <div className=" mb-[6px]">
              <span className="inline-block w-48 max-lg:w-40">
                Warranty Information
              </span>
              <span className="text-gray-500">
                : {currentFurniture.warrantyInformation}
              </span>
            </div>
            <div className=" mb-[6px]">
              <span className="inline-block w-48 max-lg:w-40">Dimensions</span>
              <span className="text-gray-500">
                : width - {currentFurniture.dimensions.width}, height -{" "}
                {currentFurniture.dimensions.height}, depth -{" "}
                {currentFurniture.dimensions.depth}
              </span>
            </div>
            <div className=" mb-[6px]">
              <span className="inline-block w-48 max-lg:w-40">
                Return Policy
              </span>
              <span className="text-gray-500">
                : {currentFurniture.returnPolicy}
              </span>
            </div>
          </div>

          {/* Reviews Body */}
          <ul
            className={`reviews-body additional-body hidden ${
              activeTab === "reviews" && "!block"
            }`}
          >
            {currentFurniture.reviews.map((review, index) => {
              return (
                <li key={index} className="mb-4">
                  <StarRatings
                    rating={review.rating}
                    starRatedColor="#ffc800"
                    starDimension="20px"
                  />
                  <p>{review.reviewerName}</p>
                  <p className="text-gray-500">{review.comment}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
export default AdditionalReviews;
