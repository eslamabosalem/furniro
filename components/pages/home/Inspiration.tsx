import Button from "@/components/UI/Button";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import InspirationImageSlider from "./InspirationImageSlider";

function Inspiration() {
  return (
    <section className="inspiration-section bg-pink py-12">
      <div className="container flex  gap-10 items-center justify-center  overflow-hidden max-lg:flex-col max-lg:">
        {/* Content */}
        <div className="content flex-[3] max-lg:text-center">
          <h2 className="text-5xl font-bold opacity-85">
            50+ Beautiful rooms
            <br /> inspiration
          </h2>
          <p className="opacity-85 mb-8 mt-4">
            Our designer already made a lot of beautiful
            <br /> prototipe of rooms that inspire you
          </p>
          <Button title="Explore More" />
        </div>

        {/* Overview */}
        <div className="overview relative self-start flex-[2] max-lg:self-auto">
          <Image
            src="/home/inspiration/overview.png"
            alt="Inspiration OverView"
            width={350}
            height={188}
          ></Image>
          <div className="over-view-content bg-white/50 py-6 pl-8 absolute bottom-4 left-4 w-2/3 text-left">
            <span className="text-gray-900 ">01 - Bed Room</span>
            <h4 className="text-2xl font-semibold">Inner Peace</h4>
            <Button
              title={<FaArrowRightLong className="w-4 h-4" />}
              className="px-3 py-3 absolute left-full bottom-0"
            />
          </div>
        </div>

        {/* Image Slider */}
        <InspirationImageSlider />
      </div>
    </section>
  );
}
export default Inspiration;
