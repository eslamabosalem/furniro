import FeatureFrame from "@/components/global/FeatureFrame";
import PageBanner from "@/components/global/PageBanner";
import CheckOutForm from "@/components/pages/checkout/CheckOutForm";

function page() {
  return (
    <>
      {/* Checkout Banner */}
      <PageBanner pageName="Checkout" showIcon={true} />
      {/* Checkout Body */}
      <CheckOutForm />
      {/* Feature Frame */}
      <FeatureFrame />
    </>
  );
}
export default page;
