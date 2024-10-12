"use client";

import Image from "next/image";
import { useState } from "react";

import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

const Button = ({ label }) => {
  return (
    <button className="text-gray-400 border-b-2 border-white hover:border-green-500 hover:text-black">
      {label}
    </button>
  );
};

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex flex-row lg:px-40 py-6 px-10 w-full justify-between items-center bg-white z-10">
      <Image src={logo} alt="img" className="" />
      <button onClick={() => setToggle(!toggle)} className="lg:hidden">
        <Image src={!toggle ? hamburger : close} alt="img" />
      </button>
      {toggle && (
        <div className="lg:hidden bg-white absolute w-96 top-24 flex flex-col justify-center items-center py-6 gap-4">
            <button>Home</button>
            <button>About</button>
            <button>Contact</button>
            <button>Blog</button>
            <button>Careers</button>
        </div>
      )}
      <div className="flex flex-row gap-8 max-lg:hidden">
        <Button label="Home" />
        <Button label="About" />
        <Button label="Contact" />
        <Button label="Blog" />
        <Button label="Careers" />
      </div>
      <button className="text-white max-lg:hidden bg-gradient-to-r from-green-500 hover:from-green-300 hover:to-cyan-300 to-cyan-400 p-2 px-6 rounded-full">
        <h1>Request Invite</h1>
      </button>
    </div>
  );
};

export default NavBar;
