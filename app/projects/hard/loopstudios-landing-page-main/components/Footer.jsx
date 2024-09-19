"use client";

import Image from "next/image";

import face from "../images/icon-facebook.svg";
import insta from "../images/icon-instagram.svg";
import pint from "../images/icon-pinterest.svg";
import twit from "../images/icon-twitter.svg";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="w-full bg-black px-40 py-6 flex flex-col gap-6">
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl text-white">loopstudios</h1>
        <div className="flex flex-row gap-3">
          <Image src={face} alt="img" className="h-6" />
          <Image src={twit} alt="img" className="h-6" />
          <Image src={pint} alt="img" className="h-6" />
          <Image src={insta} alt="img" className="h-6" />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-4 text-white">
          <Button name="About" />
          <Button name="Careers" />
          <Button name="Events" />
          <Button name="Products" />
          <Button name="Support" />
        </div>
        <h1 className="text-gray-500 text-sm">© 2021 Loopstudios. All rights reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
