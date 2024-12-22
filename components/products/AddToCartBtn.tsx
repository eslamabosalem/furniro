"use client";

import { useAppDispatch } from "@/lib/store/hooks";
import Button from "../UI/Button";
import { addProduct } from "@/lib/store/features/products/productsSlice";
import { FurnitureType } from "@/lib/types";

function AddToCartBtn({
  currentFurniture,
}: {
  currentFurniture: FurnitureType;
}) {
  const dispatch = useAppDispatch();
  return (
    <Button
      onClick={() => dispatch(addProduct([currentFurniture, 1]))}
      title="Add to cart"
      className="bg-white hover:bg-goldPrimary !text-goldPrimary hover:!text-white shadow transition px-8 !py-3 max-lg:py-2 max-lg:px-4 rounded-full -mb-4"
    />
  );
}
export default AddToCartBtn;
