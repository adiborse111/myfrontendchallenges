
// pc img
import deepPc from "../images/desktop/image-deep-earth.jpg"
import nightPc from "../images/desktop/image-night-arcade.jpg"
import soccerPc from "../images/desktop/image-soccer-team.jpg"
import gridPc from "../images/desktop/image-grid.jpg"
import abovePc from "../images/desktop/image-from-above.jpg"
import pocketPc from "../images/desktop/image-pocket-borealis.jpg"
import curiosityPc from "../images/desktop/image-curiosity.jpg"
import fisheyePc from "../images/desktop/image-fisheye.jpg"


import Image from "next/image"

const Third = () => {
  return (
    <div className="px-40 flex flex-col">
      <div className="flex flex-row w-full justify-between">
        <h1 className="text-5xl font-light">OUR CREATIONS</h1>
        <button className="border-2 px-10 border-black font-serif hover:bg-black hover:text-white">SEE ALL</button>
      </div>
      <div className="mt-20 flex flex-col">
        <div className="flex flex-row">
            <button className="relative text-gray-500 hover:text-black bg-black">
                <Image src={deepPc} alt="img" className="hover:-z-10" />
                <h1 className="absolute bottom-0  mb-10 ml-10 text-3xl text-left">DEEP <br />EARTH</h1>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Third;
