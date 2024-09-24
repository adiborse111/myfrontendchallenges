import Image from "next/image";

import bgtop from "./images/bg-top.svg";
import bgbottom from "./images/bg-bottom.svg";

import SwitchDemo from "./components/SwitchToggle";

const Page = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-white">
      <Image src={bgtop} alt="img" className="absolute z-0 right-0 top-0" />
      <Image
        src={bgbottom}
        alt="img"
        className="absolute z-0 left-0 bottom-0"
      />
      <div className="flex flex-col z-10 items-center">
        <h1 className="text-4xl text-gray-500 font-semibold">Our Pricing</h1>
        <div className="flex flex-row gap-6 mt-10">
          <h1>Annually</h1>
          <SwitchDemo />
          <h1>Monthly</h1>
        </div>
      </div>
    </div>
  );
};

export default Page;
