/* eslint-disable react/jsx-key */
import { Button } from "@nextui-org/react";
import CartIcon from "../icon/CartIcon";
import { Increment, Decrement } from "./ChangeIcon";
// import { data } from "../testData";
import { useContext, useState } from "react";
import { ValueContext } from "../ProductListCart";

const DessertModal = ({ data, increaseAmount, decreaseAmount }) => {
  const img = data.image.desktop;

  return (
    <div className="flex flex-col">
      <img src={img} alt="" className="size-52 rounded" />
      <div className="absolute p-10 py-48">
        {data.amount === 0 ? (
          <Button
            startContent={<CartIcon />}
            className="bg-white border-2 rounded-full"            
            onPress={()=>increaseAmount(data.id, 1)}
          >
            Add to Cart
          </Button>
        ) : (
          <div className="border-2 rounded-full bg-red-500 flex flex-row items-center gap-5">
            <Button isIconOnly className="bg-red-500 rounded-full" onPress={()=>decreaseAmount(data.id, data.amount-1)}>
              <Decrement />
            </Button>
            {data.amount}
            <Button isIconOnly className="bg-red-500 rounded-full" onPress={()=>decreaseAmount(data.id, data.amount+1)}>
              <Increment />
            </Button>
          </div>
        )}
      </div>
      <div className="mt-6 flex flex-col gap-1">
        <h1 className="text-xs text-gray-500">{data.category}</h1>
        <h1 className="font-bold text-sm">{data.name}</h1>
        <h1 className="text-sm text-red-600">${data.price}</h1>
      </div>
    </div>
  );
};

const DessertList = () => {
  const { value } = useContext(ValueContext);
  const [data, increaseAmount, decreaseAmount] = value;
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold mb-6">Desserts</h1>
      <div className="grid grid-cols-3 gap-5">
        {data.map((data) => (
          <DessertModal data={data} increaseAmount={increaseAmount} decreaseAmount={decreaseAmount} />
        ))}
      </div>
    </div>
  );
};

export default DessertList;
