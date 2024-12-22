"use client";

import { useAppSelector } from "@/lib/store/hooks";
import Image from "next/image";
import Link from "next/link";
import { FaXmark } from "react-icons/fa6";

function TotalsPay() {
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

  return (
    <div className="totals-pay max-sm:max-w-[320px] w-[450px]">
      {/* Top */}
      <div className="top pb-6 border-b">
        {/* Head */}
        <div className="tatals-header flex justify-between items-center">
          <h4 className="text-xl font-medium pb-1">Product</h4>
          <span className="self-end text-xl font-medium">Subtotal</span>
        </div>

        {/* Products */}
        <ul>
          {products.map(({ product, ammount }) => {
            if (product)
              return (
                <li key={product.id} className="flex justify-between py-2">
                  <div className="name flex gap-3 items-center">
                    <span className="text-gray-500">
                      {product.title.split(" ").slice(0, 2).join(" ")}
                    </span>
                    <span>
                      <FaXmark />
                    </span>
                    <span>{ammount}</span>
                  </div>

                  <div className="price">EGP {product.price}</div>
                </li>
              );
          })}
        </ul>

        {/* Total */}
        <div className="flex items-center justify-between">
          <span>Total</span>
          <span className="text-goldPrimary text-2xl font-bold py-2">
            EGP {Math.trunc(total)}
          </span>
        </div>
      </div>

      {/* Bottom */}
      <div className="bottom">
        <h4 className="flex items-center gap-3 mt-6 mb-2">
          <Image src="/dot.svg" alt="dot" width={10} height={10} />
          <span>Direct Bank Transfer</span>
        </h4>

        <p className="text-black/35 leading-5">
          Make your payment directly into our bank account. Please use your
          Order ID as the payment reference. Your order will not be shipped
          until the funds have cleared in our account.
        </p>

        <div className="flex items-center gap-3 mt-5 text-black/40 font-medium">
          <input type="radio" name="payway" id="one" />
          <label htmlFor="one">Direct Bank Transfer</label>
        </div>
        <div className="flex items-center gap-3 text-black/40 font-medium">
          <input type="radio" name="payway" id="two" />
          <label htmlFor="two">Cash On Delivery</label>
        </div>

        <p className="mt-3">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <b>privacy policy.</b>
        </p>

        <Link href="/checkout" className="block mx-auto w-fit mt-8">
          <button className="border border-black rounded-xl px-14 py-3 mb-14 hover:bg-goldPrimary hover:text-white transition hover:border-pink font-medium">
            Place order
          </button>
        </Link>
      </div>
    </div>
  );
}
export default TotalsPay;
