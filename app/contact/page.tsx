import FeatureFrame from "@/components/global/FeatureFrame";
import PageBanner from "@/components/global/PageBanner";
import ContactBody from "@/components/pages/contact/ContactBody";

function page() {
  return (
    <>
      {/* Contact Banner */}
      <PageBanner pageName="Contact" showIcon={true} />
      {/* Contact Body */}
      <ContactBody />
      {/* Feature Frame */}
      <FeatureFrame />
    </>
  );
}
export default page;
