import Image from "next/image";

function Range() {
  return (
    <section className="my-16 text-center">
      <div className="container">
        {/* Header */}
        <div className="range-header">
          <h3 className="text-3xl font-semibold">Browse The Range</h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="range-content mt-12 flex justify-center gap-10 max-lg:gap-8 flex-wrap">
          {/* Dining Article */}
          <article className="flex flex-col items-center gap-6">
            <div className="images relative w-[320px]  h-[403.33px] rounded-xl overflow-hidden">
              <Image
                src="/home/range/dining01.png"
                alt="Dining Photo"
                width={320}
                height={403}
                className="absolute  "
                style={{ width: "320px", height: "403px" }}
              ></Image>
              <Image
                src="/home/range/dining02.png"
                alt="Dining Photo"
                width={320}
                height={403}
                className="absolute hover:opacity-0  "
                style={{ transition: "1s", width: "320px", height: "403px" }}
              ></Image>
            </div>
            <p className="font-medium text-lg">Dining</p>
          </article>
          {/* Living Article */}
          <article className="flex flex-col items-center gap-6">
            <div className="images relative  w-[320px] h-[403.33px] rounded-xl overflow-hidden">
              <Image
                src="/home/range/living01.png"
                alt="Living Photo"
                width={320}
                height={403}
                className="absolute  "
                style={{ width: "320px", height: "403px" }}
              ></Image>
              <Image
                src="/home/range/living02.png"
                alt="Living Photo"
                width={320}
                height={403}
                className="absolute hover:opacity-0  "
                style={{ transition: "1s", width: "320px", height: "403px" }}
              ></Image>
            </div>
            <p className="font-medium text-lg">Living</p>
          </article>
          {/* Bedroom Article */}
          <article className="flex flex-col items-center gap-6">
            <div className="images relative  w-[320px] h-[403.33px] rounded-xl overflow-hidden">
              <Image
                src="/home/range/bedroom01.png"
                alt="Bedroom Photo"
                width={320}
                height={403}
                className="absolute  "
                style={{ width: "320px", height: "403px" }}
              ></Image>
              <Image
                src="/home/range/bedroom02.png"
                alt="Bedroom Photo"
                width={320}
                height={403}
                className="absolute hover:opacity-0 "
                style={{ transition: "1s", width: "320px", height: "403px" }}
              ></Image>
            </div>
            <p className="font-medium text-lg">Bedroom</p>
          </article>
        </div>
      </div>
    </section>
  );
}
export default Range;
