/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import jeremy from "./images/image-jeremy.png";
import work from "./images/icon-work.svg";
import play from "./images/icon-play.svg";
import study from "./images/icon-study.svg";
import exercise from "./images/icon-exercise.svg";
import social from "./images/icon-social.svg";
import selfcare from "./images/icon-self-care.svg";
import ellipsis from "./images/icon-ellipsis.svg";

import data from "./data.json";

import Image from "next/image";
import { createContext, useContext, useState } from "react";

type MyContextType = {
  level: string;
  levelChange: (result: string) => void; // Function signature
};
const LevelContext = createContext<MyContextType | undefined>(undefined);
const useMyLevelContext = () => {
  const context = useContext(LevelContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

const SelectButton = ({ name }: { name: string }) => {
  const { level, levelChange } = useMyLevelContext();
  return (
    <button className={`hover:text-white ${name === level && 'text-white'}`} onClick={() => levelChange(name)}>
      {name}
    </button>
  );
};

const SwitchImage = (title: string) => {
  switch (title) {
    case "Work":
      return (
        <div className="bg-orange-400 flex justify-end w-full rounded-xl absolute z-0">
          <Image src={work} alt="Play image" />
        </div>
      );
    case "Play":
      return (
        <div className="bg-cyan-400 flex justify-end w-full rounded-xl absolute z-0">
          <Image src={play} alt="Play image" />
        </div>
      );
    case "Study":
      return (
        <div className="bg-red-400 flex justify-end w-full rounded-xl absolute z-0">
          <Image src={study} alt="Play image" />
        </div>
      );
    case "Exercise":
      return (
        <div className="bg-green-400 flex justify-end w-full rounded-xl absolute z-0">
          <Image src={exercise} alt="Play image" />
        </div>
      );
    case "Social":
      return (
        <div className="bg-purple-400 flex justify-end w-full rounded-xl absolute z-0">
          <Image src={social} alt="Play image" />
        </div>
      );
    case "Self Care":
      return (
        <div className="bg-yellow-400 flex justify-end w-full rounded-xl absolute z-0">
          <Image src={selfcare} alt="Play image" />
        </div>
      );
    default:
      return null;
  }
};

const Card = ({
  title,
  current,
  previous,
}: {
  title: string;
  current: number;
  previous: number;
}) => {
  return (
    <div className="flex flex-col relative">
      {SwitchImage(title)}

      <div className="flex flex-col p-4 bg-[#1c1f4a] text-white gap-4 rounded-xl mt-14 z-10 pb-6 hover:bg-[#6f76c8]">
        <div className="flex flex-row items-center w-56 justify-between">
          <h1>{title}</h1>
          <Image src={ellipsis} alt="img" className="h-1" />
        </div>
        <h1 className="text-5xl">{current}hrs</h1>
        <h1 className="text-sm">Last Week - {previous}hrs</h1>
      </div>
    </div>
  );
};

const Page = () => {
  const [level, setLevel] = useState("Daily");
  const levelChange = (result: string) => {
    setLevel(result);
  };
  return (
    <div className="bg-[#0f1424] h-screen flex justify-center items-center">
      <div className="flex flex-row gap-5">
        <div className="flex flex-col">
          <div className="flex flex-col bg-[#5847eb] p-8 text-white rounded-xl pb-20 pr-14">
            <Image
              src={jeremy}
              alt="img"
              className="size-16 border-white border-2 rounded-full mb-5"
            />
            <h4 className="text-slate-300">Report for</h4>
            <h1 className="text-5xl font-light">
              Jeremy <br />
              Robson
            </h1>
          </div>
          <div className="flex flex-col p-4 py-6 w-full items-start bg-[#1c1f4a] text-slate-500 rounded-xl gap-3">
            <LevelContext.Provider value={{ level, levelChange }}>
              <SelectButton name="Daily" />
              <SelectButton name="Weekly" />
              <SelectButton name="Monthly" />
            </LevelContext.Provider>
          </div>
        </div>
        <div className="grid grid-cols-3 h-fit gap-5">
          {data.map((data) => {
            return (
              <Card
                title={data.title}
                current={level === 'Daily' ? data.timeframes.daily.current : 
                  level === 'Weekly' ? data.timeframes.weekly.current :
                  data.timeframes.monthly.current
                }
                previous={level === 'Daily' ? data.timeframes.daily.previous : 
                  level === 'Weekly' ? data.timeframes.weekly.previous :
                  data.timeframes.monthly.previous
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
