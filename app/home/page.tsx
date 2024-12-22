import Hero from "@/components/pages/home/Hero";
import Inspiration from "@/components/pages/home/Inspiration";
import OurProducts from "@/components/pages/home/OurProducts";
import Range from "@/components/pages/home/Range";
import ShareSetup from "@/components/pages/home/ShareSetup";

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Range Section */}
      <Range />

      {/* Our Products Section */}
      <OurProducts />

      {/* Inspiration Section 🌟 */}
      <Inspiration />

      {/* Share Your Setup Section */}
      <ShareSetup />
    </>
  );
}
export default HomePage;
