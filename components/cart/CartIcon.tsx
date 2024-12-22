"use client";
import { IoCartOutline } from "react-icons/io5";
import MinitCart from "./MinitCart";
import { useState } from "react";
import { useAppSelector } from "@/lib/store/hooks";

function CartIcon() {
  const [showMiniCart, setShowMiniCart] = useState(false);
  const products = useAppSelector((state) => state.products.value);

  return (
    <>
      <button
        onClick={() => setShowMiniCart(true)}
        className="flex items-center justify-center relative"
      >
        <IoCartOutline />
        {/* Products Number */}
        <span className="block absolute -top-3 text-goldPrimary font-bold bg-pink rounded-full w-6 h-6">
          {
            products
              .map((p) => p.product && p.product.id.toString()[0])
              .join("").length
          }
        </span>
      </button>
      {/* Mini Cart */}
      <MinitCart visible={showMiniCart} setShowMiniCart={setShowMiniCart} />
    </>
  );
}
export default CartIcon;
