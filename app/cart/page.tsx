import FeatureFrame from "@/components/global/FeatureFrame";
import PageBanner from "@/components/global/PageBanner";
import CartBody from "@/components/pages/cart/CartBody";

function CartPage() {
  return (
    <>
      {/* Cart Banner */}
      <PageBanner pageName="Cart" showIcon={true} />
      {/* Cart Body */}
      <CartBody />
      {/* Feature Frame */}
      <FeatureFrame />
    </>
  );
}
export default CartPage;
