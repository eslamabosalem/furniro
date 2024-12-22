/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { addProduct } from "@/lib/store/features/products/productsSlice";
import { useAppDispatch } from "@/lib/store/hooks";
import { FurnitureType } from "@/lib/types";
import { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

type CurrentFurnitureType = {
  currentFurniture: FurnitureType;
};

function ProductOrder({ currentFurniture }: CurrentFurnitureType) {
  // const products = useAppSelector((state) => state.products.value);
  const dispatch = useAppDispatch();

  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  // Change bg For Active Size
  const [activeSize, setActiveSize] = useState(1);
  // Change bg For Active Color
  const [activeColor, setActiveColor] = useState(1);

  return (
    <div className="product-order pb-14 mb-8 border-b">
      {/* Title */}
      <h3 className="font-semibold text-4xl">
        {currentFurniture.title.split(" ").slice(0, 2).join(" ")}
      </h3>

      {/* Price */}
      <p className="text-black/45 text-3xl mt-2">
        EGP. {Math.ceil(currentFurniture.price)}
      </p>

      {/* Rating */}
      <div className="rating mt-6 flex items-center gap-6">
        {/* Stars */}
        <div className="stars-wrapper text-[#ffc800] flex gap-2 text-lg ">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
        {/* Seperator */}
        <span className="h-8 w-[1px] bg-black/30"></span>
        {/* Customers Review */}
        <p className="text-black/40">
          {currentFurniture.reviews.length} Customers Review
        </p>
      </div>

      {/* Description */}
      <div className="description max-w-[400px] mt-6">
        {currentFurniture.description}
      </div>

      {/* Size */}
      <div className="size mt-8">
        <h6 className="text-black/50 mb-3">Size</h6>
        {/* Sizes */}
        <div className="sizes-wrapper flex gap-4">
          <div className="lg">
            <label
              htmlFor="lg"
              className={`bg-pink text-black w-8 h-8 grid place-items-center cursor-pointer rounded transition ${
                activeSize == 1 && "!bg-goldPrimary !text-white"
              }`}
            >
              L
            </label>
            <input
              type="radio"
              id="lg"
              hidden
              name="size"
              onChange={(e) => {
                setSize(e.target.id);
                setActiveSize(1);
              }}
            />
          </div>

          <div className="xl">
            <label
              htmlFor="xl"
              className={`bg-pink text-black w-8 h-8 grid place-items-center cursor-pointer rounded transition ${
                activeSize == 2 && "!bg-goldPrimary !text-white"
              }`}
            >
              XL
            </label>
            <input
              type="radio"
              id="xl"
              hidden
              name="size"
              onChange={(e) => {
                setSize(e.target.id);
                setActiveSize(2);
              }}
            />
          </div>

          <div className="xs">
            <label
              htmlFor="xs"
              className={`bg-pink text-black w-8 h-8 grid place-items-center cursor-pointer rounded transition ${
                activeSize == 3 && "!bg-goldPrimary !text-white"
              }`}
            >
              XS
            </label>
            <input
              type="radio"
              id="xs"
              hidden
              name="size"
              onChange={(e) => {
                setSize(e.target.id);
                setActiveSize(3);
              }}
            />
          </div>
        </div>
      </div>

      {/* Color */}
      <div className="colors mt-4">
        <h6 className="text-black/50 mb-3">Color</h6>
        {/* Colors */}
        <div className="colors-wrapper flex gap-4">
          <div className="purple">
            <label
              htmlFor="purple"
              className={`bg-[#836efa] w-8 h-8 cursor-pointer rounded-full inline-block transition ${
                activeColor == 1 && "!border-2 !border-black/50"
              }`}
            ></label>
            <input
              type="radio"
              id="purple"
              hidden
              name="color"
              onChange={(e) => {
                setColor(e.target.id);
                setActiveColor(1);
              }}
            />
          </div>

          <div className="black">
            <label
              htmlFor="black"
              className={`bg-black w-8 h-8 cursor-pointer rounded-full inline-block transition ${
                activeColor == 2 && "!border-2 !border-white/50"
              }`}
            ></label>
            <input
              type="radio"
              id="black"
              hidden
              name="color"
              onChange={(e) => {
                setColor(e.target.id);
                setActiveColor(2);
              }}
            />
          </div>

          <div className="gold">
            <label
              htmlFor="gold"
              className={`bg-goldPrimary w-8 h-8 cursor-pointer rounded-full inline-block transition ${
                activeColor == 3 && "!border-2 !border-black/50"
              }`}
            ></label>
            <input
              type="radio"
              id="gold"
              hidden
              name="color"
              onChange={(e) => {
                setColor(e.target.id);
                setActiveColor(3);
              }}
            />
          </div>
        </div>
      </div>

      {/* Add To Cart */}
      <div className="add-to-cart mt-6 flex gap-4 items-center flex-wrap">
        {/* Quantity */}
        <div className="quantity border p-1 border-black/25 w-fit rounded-xl min-w-[108px]">
          <button
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            className="p-2 font-medium text-md active:bg-red-100 rounded-xl "
          >
            -
          </button>
          <input
            type="number"
            className="p-2 focus:outline-none text-center w-12"
            value={quantity}
            onChange={(e) =>
              +e.target.value >= 0 && setQuantity(+e.target.value)
            }
          />
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-2 font-medium text-md active:bg-goldPrimary/10 rounded-xl"
          >
            +
          </button>
        </div>

        {/* Button => Add To Cart */}
        <button
          onClick={() => dispatch(addProduct([currentFurniture, quantity]))}
          className="px-10 py-3 border border-black rounded-2xl transition focus:bg-goldPrimary focus:text-white focus:border-pink min-w-[108px]"
        >
          Add To Cart
        </button>

        {/* Button => Comparation */}
        {/* <button className="px-10 py-3 border border-black rounded-2xl transition focus:bg-goldPrimary focus:text-white focus:border-pink flex items-center gap-2">
          <IoMdAdd /> Comparation
        </button> */}
      </div>
    </div>
  );
}
export default ProductOrder;
