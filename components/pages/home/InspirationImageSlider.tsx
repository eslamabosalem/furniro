"use client";

import sliderImg01 from "@/public/home/inspiration/slider-01.png";
import sliderImg02 from "@/public/home/inspiration/slider-02.png";
import Image from "next/image";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

function InspirationImageSlider() {
  const [imagesInSlider, setImagesInSlider] = useState([
    sliderImg01,
    sliderImg02,
    sliderImg02,
    sliderImg01,
  ]);

  // For Bullets
  const [currentImg, setCurrentImg] = useState(0);

  // Swap First Image To The End
  function changeImageHandler() {
    let allImages = [...imagesInSlider];
    allImages = allImages.slice(1).concat(allImages[0]);
    setImagesInSlider(allImages);

    // Bullets Logic
    if (currentImg < imagesInSlider.length - 1) {
      setCurrentImg((c) => c + 1);
    } else {
      setCurrentImg(0);
    }
  }

  return (
    <div className="image-slider self-start flex-[3] relative  min-h-[500px] max-lg:self-auto max-lg:w-full">
      <div className="images-wrapper flex gap-4 absolute left-0 top-0">
        {/* Iterate Images */}
        {imagesInSlider.map((img, index) => {
          return (
            <Image
              key={index}
              src={img}
              alt="Image Slider"
              width={300}
              height={400}
              className="select-none"
              style={{ width: "300px", height: "400px" }}
            />
          );
        })}
      </div>

      {/* Slider Arrow */}
      <FaChevronRight
        onClick={changeImageHandler}
        className="w-14 h-14 p-4 bg-white text-goldPrimary rounded-full shadow-2xl cursor-pointer absolute right-0 top-1/2 translate-y-1/2"
      />

      {/* Bullets */}
      <ul className="bullets-wrapper absolute bottom-[60px] flex gap-4">
        {imagesInSlider.map((img, index) => {
          return (
            <li
              key={index}
              className={` rounded-full !p-2 ${
                currentImg == index && " border border-goldPrimary/60 "
              }`}
            >
              <span
                className={` bg-gray-300 w-3 h-3 block rounded-full ${
                  currentImg == index && "!bg-goldPrimary "
                }`}
              ></span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default InspirationImageSlider;
