"use client";

// pc img
import deepPc from "../images/desktop/image-deep-earth.jpg";
import nightPc from "../images/desktop/image-night-arcade.jpg";
import soccerPc from "../images/desktop/image-soccer-team.jpg";
import gridPc from "../images/desktop/image-grid.jpg";
import abovePc from "../images/desktop/image-from-above.jpg";
import pocketPc from "../images/desktop/image-pocket-borealis.jpg";
import curiosityPc from "../images/desktop/image-curiosity.jpg";
import fisheyePc from "../images/desktop/image-fisheye.jpg";

import Image from "next/image";

const Button = ({ title, img }: { title: string; img: string }) => {
  return (
    <button className="relative text-white font-thin hover:text-black">
      <Image src={img} alt="img" className="hover:-z-10 hover:opacity-30" />
      <h1 className="absolute bottom-0 w-28 mb-10 ml-10 text-3xl text-left">
        {title}
      </h1>
    </button>
  );
};

const Third = () => {
  return (
    <div className="px-40 flex flex-col pb-40">
      <div className="flex flex-row w-full justify-between">
        <h1 className="text-5xl font-light">OUR CREATIONS</h1>
        <button className="border-2 px-10 border-black font-serif hover:bg-black hover:text-white">
          SEE ALL
        </button>
      </div>
      <div className="mt-20 flex flex-col gap-10">
        <div className="flex flex-row justify-between">
          <Button title="DEEP EARTH" img={deepPc} />
          <Button title="NIGHT ARCADE" img={nightPc} />
          <Button title="SOCCER TEAMVR" img={soccerPc} />
          <Button title="THE GRID" img={gridPc} />
        </div>
        <div className="flex flex-row justify-between">
          <Button title="FROMUP ABOVEVR" img={abovePc} />
          <Button title="POCKET BOREALIS" img={pocketPc} />
          <Button title="THE CURIOSITY" img={curiosityPc} />
          <Button title="MAKE IT FISHEYE" img={fisheyePc} />
        </div>
      </div>
    </div>
  );
};

export default Third;
