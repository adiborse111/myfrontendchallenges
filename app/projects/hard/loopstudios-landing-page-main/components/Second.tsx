import Image from "next/image";

import interactive from "../images/desktop/image-interactive.jpg";

const Second = () => {
  return (
    <div className="lg:p-40 lg:ml-4 w-fit flex lg:flex-row max-lg:flex-col max-lg:mt-28 max-lg:px-10">
      <Image src={interactive} alt="img" />
      <div className="lg:absolute bg-white lg:pl-20 lg:pt-10 lg:mt-60 lg:left-[48%] flex flex-col lg:w-[40%] gap-11 max-lg:py-10">
        <h1 className="lg:w-2/3 text-5xl font-light max-lg:text-center flex items-center">
          THE LEADER IN INTERACTIVE VR
        </h1>
        <p className="text-lg max-lg:px-6 lg:text-sm lg:w-[75%] font-extralight text-gray-500 font-serif max-lg:text-center ">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};

export default Second;
