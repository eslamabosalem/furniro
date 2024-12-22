import Button from "@/components/UI/Button";
import Image from "next/image";

function Hero() {
  return (
    <section className="hero-section">
      {/* BackGround Image */}

      <Image
        src={"/home/hero.png"}
        alt="Hero Background Furniture"
        style={{ objectFit: "cover" }}
        fill={true}
        className=" m-auto -z-20  "
      ></Image>

      {/* New Arrival Card */}

      <article className="new-arrival-card  z-10">
        <span>New Arrival</span>
        <h2>
          Discover Our <br /> New Collection
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, <br /> luctus nec ullamcorper mattis.
        </p>
        <Button title="buy now" />
      </article>
    </section>
  );
}
export default Hero;
