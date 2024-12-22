import { HiOutlineTrophy } from "react-icons/hi2";
import Feature from "./Feature";
import { LuBadgeCheck } from "react-icons/lu";
import { MdOutlineLocalShipping, MdSupportAgent } from "react-icons/md";

function FeatureFrame() {
  return (
    <section className="bg-pink py-10">
      <div className="features-wrapper xl:max-w-[1600px] xl:mx-auto flex justify-evenly items-center flex-wrap gap-8">
        <Feature
          icon={<HiOutlineTrophy />}
          title="High Quality"
          body="Crafted from top materials"
        />
        <Feature
          icon={<LuBadgeCheck />}
          title="Warranty Protection"
          body="Over 2 years"
        />
        <Feature
          icon={<MdOutlineLocalShipping />}
          title="Free Shipping"
          body="Order over 150 $"
        />
        <Feature
          icon={<MdSupportAgent />}
          title="24 / 7 Support"
          body="Dedicated support"
        />
      </div>
    </section>
  );
}
export default FeatureFrame;
