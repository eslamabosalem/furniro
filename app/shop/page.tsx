import FeatureFrame from "@/components/global/FeatureFrame";
import PageBanner from "@/components/global/PageBanner";
import Filter from "@/components/pages/shop/Filter";
import FurnitureProducts from "@/components/pages/shop/FurnitureProducts";

function page() {
  return (
    <>
      {/* Shop Banner */}
      <PageBanner pageName="Shop" />
      {/* Filter Component */}
      <Filter />
      {/* Furnitre Products */}
      <FurnitureProducts />
      {/* Feature Frame */}
      <FeatureFrame />
    </>
  );
}
export default page;
