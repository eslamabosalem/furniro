import Image from "next/image";

function ShareSetup() {
  return (
    <section className="share-setup py-20">
      {/* Section Header */}
      <div className="header text-center">
        <p className="text-gray-900">Share your setup with</p>
        <h3 className="font-bold text-3xl text-black/90">#FuniroFurniture</h3>
      </div>

      {/* Gallery */}
      <div className="gallery-wrapper flex gap-4 items-center overflow-hidden max-xl:flex-col max-xl:mt-10">
        {/* Left Side */}
        <div className="left flex-[3] flex flex-col gap-4 relative right-[40px]">
          <div className="top flex gap-4 items-end">
            <Image
              src="/home/shareSetup/left01.png"
              alt="Gallery Photo"
              width={274}
              height={382}
            ></Image>
            <Image
              src="/home/shareSetup/left02.png"
              alt="Gallery Photo"
              width={451}
              height={312}
            ></Image>
          </div>
          <div className="bottom flex gap-4 items-start">
            <Image
              src="/home/shareSetup/left03.png"
              alt="Gallery Photo"
              width={381}
              height={323}
            ></Image>
            <Image
              src="/home/shareSetup/left04.png"
              alt="Gallery Photo"
              width={344}
              height={242}
            ></Image>
          </div>
        </div>

        {/* Middle Side */}
        <div className={`middle flex-[1] 2xl:block hidden`}>
          <Image
            src="/home/shareSetup/middle.png"
            alt="Gallery Photo"
            width={295}
            height={392}
          ></Image>
        </div>

        {/* Right Side */}
        <div className="right flex-[3] flex flex-col gap-4 ">
          <div className="top flex-[2] flex gap-4 items-end">
            <Image
              src="/home/shareSetup/right01.png"
              alt="Gallery Photo"
              width={290}
              height={348}
            ></Image>
            <Image
              src="/home/shareSetup/right02.png"
              alt="Gallery Photo"
              width={425}
              height={433}
            ></Image>
          </div>
          <div className="bottom flex-1 flex gap-4 items-start">
            <Image
              src="/home/shareSetup/right03.png"
              alt="Gallery Photo"
              width={178}
              height={242}
            ></Image>
            <Image
              src="/home/shareSetup/right04.png"
              alt="Gallery Photo"
              width={258}
              height={196}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ShareSetup;
