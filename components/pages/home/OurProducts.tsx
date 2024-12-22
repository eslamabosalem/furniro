import ProductCard from "@/components/products/ProductCard";
import data from "@/lib/furniture.json";

function OurProducts() {
  const furniture = data.products;

  return (
    <section className="my-16">
      <div className="container">
        {/* Header */}
        <h3 className="text-3xl font-semibold text-center">Our Products</h3>
        {/* Products View */}
        <ul className="products-wrapper mt-10 flex gap-10 max-sm:gap-5 justify-center flex-wrap max-w-[1000px] mx-auto">
          {furniture.map((furniture, index) => {
            // Show 8 Products In Home Page
            if (index < 8)
              return (
                // Iterate Our Products
                <li key={furniture.id} className="w-[200px] max-sm:w-[140px]">
                  <ProductCard
                    id={furniture.id}
                    title={furniture.title}
                    description={furniture.description}
                    price={furniture.price}
                    thumbnail={furniture.thumbnail}
                    discountPercentage={furniture.discountPercentage}
                  />
                </li>
              );
          })}
        </ul>
      </div>
    </section>
  );
}
export default OurProducts;
