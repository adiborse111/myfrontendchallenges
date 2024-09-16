"use client";

import Image from "next/image";
import NavBar from "./NavBar";

import heroDesk from "../images/desktop/image-hero.jpg";
import heroMob from "../images/mobile/image-hero.jpg"

const Hero = () => {
  return (
    <div className="w-full">
      <Image src={heroDesk} alt="hero" className="lg:w-full max-lg:hidden" />
      <Image src={heroMob} alt="hero" className="lg:hidden" />
      <div className="absolute top-0 w-full">
        <NavBar />
        <div className="lg:px-44 text-white lg:w-fit lg:mt-32 mt-52 w-fit max-lg:pl-10 max-lg:pt-10">
          <div className="lg:border-2 lg:p-6 lg:px-10 lg:text-8xl text-6xl lg:w-3/5 font-light">
            <h1 className="max-lg:w-fit max-lg:border-2 max-lg:p-6 max-lg:mr-10">
              IMMERSIVE EXPERIENCES THAT DELIVER
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
