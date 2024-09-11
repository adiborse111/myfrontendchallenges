import { useContext, useEffect, useState } from "react";
import { ValueContext } from "../TipCalculator";

const Result = () => {
  const { value, value2, value3 } = useContext(ValueContext);
  const [bill, setBill] = value;
  const [tip, setTip] = value2;
  const [people, setPeople] = value3;

  const reset = () => {
    setBill("");
    setTip("");
    setPeople("");
    setAmount(0)
    setTotal(0)
  };
  useEffect(() => {
    if (
      bill !== '' &&
      bill !== 0 &&
      tip !== '' &&
      tip !== 0 &&
      people !== '' &&
      people !== 0
    ) {
      let result1 = ((bill * tip) / (100 * people)).toFixed(2);
      let result2 = Number(bill/people) + Number(((bill*tip*0.01)/people).toFixed(2))
      setAmount(result1);
      setTotal(result2)
    }
  }, [bill, tip, people]);

  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  return (
    <div className="flex flex-col m-4 bg-[#00494d] py-8 px-6 rounded-lg">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="font-serif text-white">Tip Amount</h1>
          <h3 className="font-serif text-sm text-gray-400">/ person</h3>
        </div>
        <div className="font-serif text-5xl">${amount}</div>
      </div>

      <div className="flex flex-row mt-10 justify-between">
        <div className="flex flex-col">
          <h1 className="font-serif text-white">Total</h1>
          <h3 className="font-serif text-sm text-gray-400">/ person</h3>
        </div>
        <div className="font-serif text-5xl">${total}</div>
      </div>

      <div className="mt-24 w-full items-center justify-center flex">
        <button
          className="bg-[#26c0ab] hover:bg-[#c5e4e7] py-2 px-32 font-semibold rounded-lg"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Result;
