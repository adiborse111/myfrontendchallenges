"use client";

import Image from "next/image";
import bgpc from "../images/bg-intro-desktop.svg";
import phone from "../images/image-mockups.png";

const Hero = () => {
  return (
    <div className="pl-40 bg-gradient-to-t from-white to-slate-100 h-[105vh] overflow-hidden">
      <div>hello</div>
      <div className="relative left-[30rem] -top-64">
        <Image src={bgpc} alt="img" />
        <div className="absolute left-64 top-28">
          <Image src={phone} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
