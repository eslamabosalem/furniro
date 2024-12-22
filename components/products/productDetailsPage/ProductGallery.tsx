"use client";

import type { FurnitureType } from "@/lib/types";
import Image from "next/image";
import { useEffect, useState } from "react";

type CurrentFurnitureType = {
  currentFurniture: FurnitureType;
};

function ProductGallery({ currentFurniture }: CurrentFurnitureType) {
  const [images, setImages] = useState<string[]>([]);
  // Index Of The Big Image
  const [bigImg, setBigImg] = useState(0);

  // Check Furniture Images Availability
  useEffect(() => {
    if (typeof currentFurniture !== "undefined") {
      setImages(currentFurniture.images);
    }
  }, [currentFurniture]);

  if (images.length > 0)
    return (
      <div className="product-gallery flex gap-8 flex-1 max-lg:flex-col-reverse max-lg:items-center">
        {/* All Images */}
        <div className="images-wrapper flex flex-col gap-6 max-lg:flex-row flex-wrap max-lg:justify-center">
          {images.map((img, index) => {
            return (
              <Image
                // Each Image Click Handler
                onClick={() => setBigImg(index)}
                key={index}
                src={img}
                alt="Furniture Image"
                width={80}
                height={188}
                className="rounded-xl bg-pink cursor-pointer w-auto h-auto"
              ></Image>
            );
          })}
        </div>

        {/* Big Image */}
        <div className="big-image w-full max-lg:w-auto">
          <Image
            src={images[bigImg]}
            alt="Furniture Image"
            width={320}
            height={188}
            priority
            className="rounded-xl bg-pink cursor-pointer w-full max-lg:w-auto"
          ></Image>
        </div>
      </div>
    );
}
export default ProductGallery;
