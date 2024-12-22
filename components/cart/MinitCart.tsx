import { useAppSelector } from "@/lib/store/hooks";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { BsBagX } from "react-icons/bs";
import MiniProductCard from "./MiniProductCard";
import Link from "next/link";

function MinitCart({
  visible,
  setShowMiniCart,
}: {
  visible: boolean;
  setShowMiniCart: Dispatch<SetStateAction<boolean>>;
}) {
  // Get Cart Products From Redux
  const products = useAppSelector((state) => state.products.value);

  // Total Price
  let total = products
    .map((p) => {
      if (p.product) return p.ammount * p.product?.price;
    })
    .reduce((pre, cur) => {
      if (pre == undefined || cur == undefined) {
        return 0;
      } else {
        return pre + cur;
      }
    }, 0);
  total = typeof total == "number" ? Math.ceil(total) : 0;

  // Click OutSide Handle
  const layoutRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target == layoutRef.current) {
        setShowMiniCart(false);
      }
    });
  }, []);

  return (
    <div
      ref={layoutRef}
      className={`mini-cart-layout fixed z-50 inset-0 overflow-hidden bg-black/50  ${
        visible ? "translate-x-0" : "translate-x-full"
      } `}
    >
      {/* Mini Cart */}
      <div
        className={`mini-cart p-6 bg-white fixed right-0 top-0 w-full md:w-[500px] ${
          visible ? "translate-x-0" : "translate-x-full"
        } transition`}
      >
        {/* Header */}
        <div className="mini-cart-header flex justify-between items-start">
          <h3 className="flex-1 w-[250px] border-b pb-4 font-bold text-lg">
            Shopping Cart
          </h3>
          <BsBagX
            onClick={() => setShowMiniCart(false)}
            className="!pb-4 !w-10 !h-10 text-gray-600"
          />
        </div>

        {/* Body */}
        <div className="mini-cart-body h-[400px] flex flex-col ">
          {/* Products */}
          <ul className="products flex-1 overflow-y-scroll ">
            {products.length > 0 &&
              products.map((p) => {
                if (p.product)
                  return (
                    <li key={p.product.id}>
                      <MiniProductCard
                        id={p.product.id}
                        img={p.product.thumbnail}
                        title={p.product.title.split(" ").slice(0, 2).join(" ")}
                        ammount={p.ammount}
                        price={p.product.price}
                      />
                    </li>
                  );
              })}
          </ul>
          {/* Total */}
          <div className="subtotal pt-4 flex gap-[50%] items-center">
            <p>Subtotal</p>
            <span className="text-goldPrimary font-medium">EGP {total}</span>
          </div>
        </div>

        {/* Footer */}
        <div
          className="mini-cart-foot flex gap-4 border-t pt-4 mt-4"
          onClick={() => setShowMiniCart(false)}
        >
          <Link href="/cart">
            <button className="px-5 lg:px-10 py-2 rounded-full border border-black transition hover:bg-goldPrimary hover:text-white hover:border-pink">
              Cart
            </button>
          </Link>

          <Link href="/checkout">
            <button className="px-5 lg:px-10 py-2 rounded-full border border-black transition hover:bg-goldPrimary hover:text-white hover:border-pink">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default MinitCart;
