import Image from "next/image";
import Button from "../UI/Button";
import { IoMdShare } from "react-icons/io";
// import { MdOutlineCompareArrows } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import AddToCartBtn from "./AddToCartBtn";
import furniture from "@/lib/furniture.json";

type ProductCardProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  discountPercentage: number;
};

function ProductCard({
  id,
  title,
  description,
  price,
  thumbnail,
  discountPercentage,
}: ProductCardProps) {
  return (
    <div className="product-card bg-grayBg h-[300px] w-[200px] max-sm:w-[135px] flex flex-col">
      {/* Card Thumbnail */}
      <Image src={thumbnail} alt="Test" width={200} height={200} />
      {/* Discount Popup */}

      <span
        className={`bg-red-400  text-white text-[10px] font-bold rounded-full  w-10 h-10 grid place-items-center absolute right-4 top-4 ${
          discountPercentage < 1 && "!bg-emerald-400"
        }`}
      >
        {discountPercentage > 1 ? `-${Math.round(discountPercentage)}%` : "New"}
      </span>

      {/* Card Content */}
      <div className="content p-4 flex flex-col justify-between h-full relative">
        <div>
          <h4 className="font-semibold">
            {/* Get First 2 Words Only Of The Name */}
            {title.split(" ").slice(0, 2).join(" ")}
          </h4>
          <p className="text-xs text-gray-500">
            {description.split(" ").slice(0, 4).join(" ")}
          </p>
        </div>
        <div className="price flex gap-2 items-center">
          <span className="text-sm font-semibold block mt-2">EGP {price}</span>
          <span className="text-xs block mt-2 text-gray-500 line-through">
            EGP {Math.trunc((price * discountPercentage) / 100 + price)}
          </span>
        </div>
      </div>

      {/* Hover Layout */}
      <div className="hover-layout ">
        {/* More Details */}
        <Link href={`/shop/${id}`}>
          <Button
            title="More Details"
            className="bg-white hover:bg-goldPrimary !text-goldPrimary hover:!text-white shadow transition px-8 !py-3 max-lg:py-2 max-lg:px-4 capitalize rounded"
          />
        </Link>
        {/* Add To Cart */}
        <AddToCartBtn
          currentFurniture={furniture.products.filter((p) => p.id === id)[0]}
        />

        {/* Options */}
        <div className="options !opacity-50  flex items-center text-xs gap-3 font-semibold max-lg:flex-col">
          <div className="flex  items-center gap-[2px] cursor-pointer">
            <IoMdShare className="text-sm" />
            <span>share</span>
          </div>
          {/* <div className="flex items-center gap-[2px] cursor-pointer">
            <MdOutlineCompareArrows className="text-sm" />
            <span>Compare</span>
          </div> */}
          <div className="flex items-center gap-[2px] cursor-pointer">
            <CiHeart className="text-sm" />
            <span>Like</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
