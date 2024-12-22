"use client";
import { deleteProduct } from "@/lib/store/features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import Image from "next/image";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";

function CartBody() {
  const products = useAppSelector((state) => state.products.value);
  const dispatch = useAppDispatch();

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
    <div className="cart-body py-20 ">
      <div className="container lg:px-20 flex gap-10 justify-center flex-wrap">
        {/* Products Table */}
        <div className="table-container overflow-x-scroll w-fit">
          <table>
            <thead className="bg-pink">
              <tr>
                <th className="py-4 min-w-[350px]">Product</th>
                <th className="min-w-[150px]">Price</th>
                <th className="min-w-[150px]">Quantity</th>
                <th className="min-w-[150px]">Subtotal</th>
                {/* Trash */}
                <th className="min-w-[50px]"></th>
              </tr>
            </thead>

            <tbody>
              {products &&
                products.map(({ product, ammount }) => {
                  if (product)
                    return (
                      <tr key={product.id} className="text-center">
                        {/* Product */}
                        <td className="flex items-center gap-4">
                          <Image
                            src={product.thumbnail}
                            alt="Product Photo"
                            width={120}
                            height={120}
                          ></Image>
                          <p className="text-gray-500">{product.title}</p>
                        </td>
                        {/* Price */}
                        <td>
                          <span className="text-gray-500">
                            EGP {product.price}
                          </span>
                        </td>
                        {/* Quantity */}
                        <td>
                          <span className="border py-1 px-3 rounded">
                            {ammount}
                          </span>
                        </td>
                        {/* SubTotal */}
                        <td>
                          <span>EGP {Math.ceil(product.price * ammount)}</span>
                        </td>
                        {/* Trash */}
                        <td>
                          <FaTrash
                            onClick={() => dispatch(deleteProduct(product.id))}
                            className="text-goldPrimary mx-auto cursor-pointer opacity-80 hover:opacity-100 transition"
                          />
                        </td>
                      </tr>
                    );
                })}
            </tbody>
          </table>
        </div>

        {/* Totals And Checkout */}
        <div className="totals w-[300px] lg:min-w-[400px] bg-pink text-center py-2">
          <h3 className="text-3xl font-bold mb-10">Cart Totals</h3>
          <div className="subtotal flex gap-10 justify-center mb-4">
            <span className="font-medium">Subtotal</span>
            <span className="text-gray-500 text-sm">EGP {total}</span>
          </div>
          <div className="total flex gap-10 justify-center mb-8">
            <span className="font-medium">Total</span>
            <span className="text-goldPrimary text-lg">EGP {total}</span>
          </div>
          <Link href="/checkout">
            <button className="border border-black rounded-xl px-14 py-3 mb-14 hover:bg-goldPrimary hover:text-white transition hover:border-pink font-medium">
              Check Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default CartBody;
