import { FurnitureType } from "@/lib/types";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type CurrentFurnitureType = {
  currentFurniture: FurnitureType;
};

function ProductMoreDetails({ currentFurniture }: CurrentFurnitureType) {
  return (
    <div className="more-details">
      <div className="text-gray-400 mb-[6px]">
        <span className="inline-block w-20">SKU</span>
        <span>: {currentFurniture.sku}</span>
      </div>

      <div className="text-gray-400 mb-[6px]">
        <span className="inline-block w-20">Category</span>
        <span>: {currentFurniture.category}</span>
      </div>

      <div className="text-gray-400 mb-[6px]">
        <span className="inline-block w-20">Tags</span>
        <span>: {currentFurniture.tags.join(", ")}</span>
      </div>

      <div className="text-gray-400 mb-[6px] flex items-center">
        <span className="inline-block w-20">Share</span>
        <span>: </span>
        <span className="flex gap-4 text-black ml-[6px]">
          <FaFacebook className="cursor-pointer" />
          <FaLinkedin className="cursor-pointer" />
          <FaXTwitter className="cursor-pointer" />
        </span>
      </div>
    </div>
  );
}
export default ProductMoreDetails;
