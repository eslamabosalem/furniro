import { deleteProduct } from "@/lib/store/features/products/productsSlice";
import { useAppDispatch } from "@/lib/store/hooks";
import Image from "next/image";
import { FaCircleXmark } from "react-icons/fa6";

function MiniProductCard({
  id,
  img,
  title,
  ammount,
  price,
}: {
  id: number;
  img: string;
  title: string;
  ammount: number;
  price: number;
}) {
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center justify-between">
      <Image src={img} alt="Product Pic" width={100} height={188}></Image>
      <div className="content">
        <h4 className="mb-2">{title}</h4>
        <div className="flex items-center gap-6">
          <span>{ammount}</span>
          <span>x</span>
          <span className="text-goldPrimary text-sm ">EGP {price}</span>
        </div>
      </div>
      <FaCircleXmark
        onClick={() => dispatch(deleteProduct(id))}
        className="text-gray-400"
      />
    </div>
  );
}
export default MiniProductCard;
