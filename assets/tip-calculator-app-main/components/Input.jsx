import { useContext, useState } from "react";
import dollar from "../images/icon-dollar.svg";
import person from "../images/icon-person.svg";
import { ValueContext } from "../TipCalculator";

const Input = () => {
  const {value, value2, value3} = useContext(ValueContext);
  const [bill, setBill] = value;
  const [tip, setTip] = value2;
  const [people, setPeople] = value3;

  return (
    <><div className="flex flex-col p-4">
      <div className="font-serif text-gray-500">Bill</div>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <img src={dollar} alt="" />
        </div>
        <input
          type="number"
          id="input-group-1"
          dir="rtl"
          className="bg-gray-50 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0"
          placeholder="0"
          value={bill}
          onChange={(e) => setBill(e.target.value)} />
      </div>

      <div className="mt-8">
        <h1 className="text-gray-500 font-serif">Select Tip %</h1>
      </div>

      <div className="mt-4 grid lg:grid-cols-3 grid-cols-2 gap-2">
        <button
          className={`${tip === 5 ? 'bg-[#26c0ab]' : 'bg-[#00494d]'} text-white font-bold rounded-md py-2 px-8 hover:bg-[#c5e4e7] hover:text-[#00494d]`}
        onClick={() => {
          setTip(5);
        } }
        >
        5%
      </button>
      <button
          className={`${tip === 10 ? 'bg-[#26c0ab]' : 'bg-[#00494d]'} text-white font-bold rounded-md py-2 px-8 hover:bg-[#c5e4e7] hover:text-[#00494d]`}
          onClick={() => setTip(10)}
      >
        10%
      </button>
      <button
          className={`${tip === 15 ? 'bg-[#26c0ab]' : 'bg-[#00494d]'} text-white font-bold rounded-md py-2 px-8 hover:bg-[#c5e4e7] hover:text-[#00494d]`}
          onClick={() => setTip(15)}
      >
        15%
      </button>
      <button
          className={`${tip === 25 ? 'bg-[#26c0ab]' : 'bg-[#00494d]'} text-white font-bold rounded-md py-2 px-8 hover:bg-[#c5e4e7] hover:text-[#00494d]`}
          onClick={() => setTip(25)}
      >
        25%
      </button>
      <button
          className={`${tip === 50 ? 'bg-[#26c0ab]' : 'bg-[#00494d]'} text-white font-bold rounded-md py-2 px-8 hover:bg-[#c5e4e7] hover:text-[#00494d]`}
          onClick={() => setTip(50)}
      >
        50%
      </button>
      <div className="w-px flex">
        <input
          type="number"
          dir="rtl"
          placeholder="Custom"
          value={tip}
          className="[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 w-24 bg-gray-50 text-gray-500"
          onChange={(e) => setTip(e.target.value)} />
      </div>
    </div><div className="mt-8">
        <h1 className="text-gray-500 font-serif">Number of People</h1>
      </div><div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <img src={person} alt="" />
        </div>
        <input
          type="number"
          id="input-group-1"
          dir="rtl"
          className="bg-gray-50 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0"
          placeholder="0"
          value={people}
          onChange={(e) => setPeople(e.target.value)} />
      </div>
    </div>
    </>
  );
};

export default Input;
