"use client";

import Button from "./Button";
import Image from "next/image";
import { useState } from "react";
import { RemoveScroll } from "react-remove-scroll";

import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {!toggle ? (
        <div className="lg:p-10 lg:px-44 flex flex-row justify-between lg:w-full max-lg:pl-10 max-lg:pt-10">
          <h1 className="text-white font-bold text-4xl">loopstudios</h1>
          <div className="mt-3 flex flex-row gap-8 max-lg:hidden text-white">
            <Button name="About" />
            <Button name="Careers" />
            <Button name="Events" />
            <Button name="Products" />
            <Button name="Support" />
          </div>
          <button
            className="mr-10 mt-4 lg:hidden"
            onClick={() => setToggle(!toggle)}
          >
            <Image src={hamburger} alt="img" />
          </button>
        </div>
      ) : (
        <RemoveScroll>
          <div className="h-screen w-screen bg-black text-white absolute overscroll-none p-10">
            <div className="flex flex-row w-full justify-between">
              <h1 className="text-white font-bold text-4xl">loopstudios</h1>
              <button onClick={() => setToggle(!toggle)} className="mt-4">
                <Image src={close} alt="img" className="" />
              </button>
            </div>
            <div className="mt-32 flex flex-col gap-14 h-full text-gray-300 text-4xl font-light">
              <Button name="ABOUT" />
              <Button name="CAREERS" />
              <Button name="EVENTS" />
              <Button name="PRODUCTS" />
              <Button name="SUPPORT" />
            </div>
          </div>
        </RemoveScroll>
      )}
    </>
  );
};

export default NavBar;
