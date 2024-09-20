import Image from "next/image";
import bgPc from "./images/pattern-background-desktop.svg";
import hero from "./images/illustration-hero.svg";
import music from "./images/icon-music.svg";
import bgMob from "./images/pattern-background-mobile.svg"

const page = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center h-screen w-full bg-blue-100`}
    >
      <Image src={bgPc} alt="img" className="w-full absolute top-0 z-10" />
      <Image src={bgMob} alt="img" className="w-full absolute top-0 z-10 lg:hidden" />
      <div className="flex flex-col object-contain rounded-xl z-20">
        <Image src={hero} alt="img" className="rounded-t-xl" />
        <div className="py-10 flex flex-col justify-center items-center bg-white gap-6 rounded-b-xl shadow-xl shadow-slate-300">
          <h1 className="text-2xl font-bold">Order Summary</h1>
          <p className="text-sm text-center text-gray-400 w-64">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="flex flex-row justify-between bg-blue-50 w-80 p-4 rounded-xl items-center">
            <div className="flex flex-row gap-2">
              <Image src={music} alt="img" />
              <div className="flex flex-col">
                <h1 className="font-bold">Annual Plan</h1>
                <h3 className="text-gray-500">$59.99/year</h3>
              </div>
            </div>
            <button className="text-sm text-blue-700 font-semibold underline hover:text-blue-400">
              Change
            </button>
          </div>
          <button className="bg-blue-700 hover:bg-blue-400 w-80 py-2 rounded-xl shadow-xl shadow-gray-400">
            <h1 className="text-white">Proceed to Payment</h1>
          </button>
          <button className="text-gray-400 hover:text-black hover:font-semibold">Cancel Order</button>
        </div>
      </div>
    </div>
  );
};

export default page;
