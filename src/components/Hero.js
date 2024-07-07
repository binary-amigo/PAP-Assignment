import React from "react";
import Image from "next/image";
import Illustration from "../assets/Illustration.svg";
import fillCircle from "../assets/Ellipse 5.svg";
import hollowCircle from "../assets/Ellipse 6.svg";

const Hero = () => {
  return (
    <div className="flex flex-col justify-end h-auto ">
      <div className="flex justify-between h-auto items-center px-40 py-28 ">
        <div className="">
          <h1 className="text-8xl my-2 font-semibold text-[#4D4D4D]">
            Lessons and insights <br />{" "}
            <span className="text-[#4CAF4F]">from 8 years</span>
          </h1>
          <p className="text-xl my-2 text-[#717171]">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="px-4 bg-[#4CAF4F] my-2 py-2 rounded-[2.78px] text-white hover:bg-[#66BB69]">
            Register
          </button>
        </div>
        <div>
          <Image src={Illustration} alt="hero" width={600} height={600} />
        </div>
      </div>
      <div className="flex place-content-center gap-2  ">
        <Image src={fillCircle} alt="circle" width={6.96} height={6.96} />
        <Image src={hollowCircle} alt="circle" width={6.96} height={6.96} />
        <Image src={hollowCircle} alt="circle" width={6.96} height={6.96} />
      </div>
    </div>
  );
};

export default Hero;
