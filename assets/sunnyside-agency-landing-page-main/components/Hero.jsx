import Nav from "./Nav";
import deskimg from "../images/desktop/image-header.jpg";
import mobimg from "../images/mobile/image-header.jpg";
import arrowdown from "../images/desktop/icon-arrow-down.svg";

const Hero = () => {
  return (
    <>
      <div className="">
        <div className="absolute top-0 z-10 w-full">
          <Nav />
          <div className="flex flex-col justify-center items-center w-full text-balance text-center text-white text-6xl font-serif font-bold mt-20">
            WE ARE CREATIVES
            <img src={arrowdown} alt="" className="lg:mt-32 mt-28" />
          </div>
        </div>
        
        <div className="max-lg:hidden">
            <img src={deskimg} alt="img" className="" />
          </div>
        <div className="lg:hidden">
          <img src={mobimg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
