import { useState } from "react";
import arrowdown from "..//images/icon-arrow-down.svg";
import arrowup from "..//images/icon-arrow-up.svg";
import Dropdown1 from "./Dropdown1";
import Dropdown2 from "./Dropdown2";

const Navbar = () => {
  const [features, setFeatures] = useState(false);
  const [comp, setComp] = useState(false);

  return (
    <>
      <div className="p-4 px-10 w-screen flex flex-row text-gray-500">
        <h1 className="text-4xl font-bold text-black">snap</h1>
        <div className="py-3 ml-20 flex flex-row">
          <button
            onClick={() => {
              setFeatures(!features);
              setComp(false);
            }}
          >
            Features
          </button>
          <button
            onClick={() => {
              setFeatures(!features);
              setComp(false);
            }}
          >
            <img
              src={features ? arrowup : arrowdown}
              alt=""
              className="object-contain mt-1 ml-2"
            />
          </button>
          {features ? (
            <div className="absolute pt-8">
              <Dropdown1 />
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="py-3 ml-14 flex flex-row">
          <button
            onClick={() => {
              setComp(!comp);
              setFeatures(false);
            }}
          >
            Company
          </button>
          <button
            onClick={() => {
              setComp(!comp);
              setFeatures(false);
            }}
          >
            <img
              src={comp ? arrowup : arrowdown}
              alt=""
              className="object-contain mt-1 ml-2"
            />
          </button>
          {comp ? (
            <div className="absolute pt-8">
              <Dropdown2 />
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="py-3 ml-14 flex flex-row">
          <h6>Careers</h6>
        </div>
        <div className="py-3 ml-14 flex flex-row">
          <h6>About</h6>
        </div>
        <div className="w-full flex place-content-end">
          <button className="mr-10 p-2">
            <h6>Login</h6>
          </button>
          <button className="px-6 border-2 hover:border-black rounded-2xl">
            <h6>Register</h6>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
