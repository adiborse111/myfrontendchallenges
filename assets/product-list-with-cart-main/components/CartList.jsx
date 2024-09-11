/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import empty from "../assets/images/illustration-empty-cart.svg";
import { ValueContext } from "../ProductListCart";
import { Button } from "@nextui-org/react";
import CrossIcon from "../icon/CrossIcon";
import eco from "../assets/images/icon-carbon-neutral.svg";

const Item = ({ data, total, setData }) => {
  const handleSetAmountToZero = (id) => {
    // Use setData to update the data array immutably
    const updatedData = data.map((data) =>
      data.id === id ? { ...data, amount: 0 } : data
    );
    setData(updatedData);  // This will trigger useEffect in the parent
  };
  return (
    <>
      {data.map((data) => {
        if (data.amount !== 0) {
          return (
            <div className="flex flex-row justify-between items-center gap-52 border-b-2 py-6">
              <div className="flex flex-col w-full">
                <div>
                  <h1 className="font-bold text-xs">{data.name}</h1>
                </div>
                <div className="flex flex-row gap-2 text-xs mt-2">
                  <h1 className="text-red-500">{data.amount}</h1>
                  <h1 className="text-slate-400">@${data.price}</h1>
                  <h1 className="font-semibold">${data.price*data.amount}</h1>
                </div>
              </div>
              <Button
                isIconOnly
                size="sm"
                className="rounded-full bg-white border-red-500 border-2"
                onPress={()=>handleSetAmountToZero(data.id)}
              >
                <CrossIcon />
              </Button>
            </div>
          );
        }
      })}
      <div className="py-8 flex flex-row justify-between">
        <h1 className="text-xs flex items-center">Order Total</h1>
        <h1 className="text-2xl font-bold">${total}</h1>
      </div>
      <div className="flex justify-center items-center p-2">
        <div className=" flex flex-row bg-yellow-50 px-16 py-4 rounded-lg gap-2">
          <img src={eco} alt="" />
          <h1 className="text-xs">This is a carbon-neutral delivery</h1>
        </div>
      </div>
      <Button className="bg-red-500 text-white rounded-full w-full mt-8">
        Confirm Order
      </Button>
    </>
  );
};

const CartList = () => {
  const { value } = useContext(ValueContext);
  const [data, setData] = value;
  const [emptyCheck, setEmptyCheck] = useState(true);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let newTotal = 0; // Initialize a local variable to accumulate total
    let isEmpty = true; // Track whether any item has a non-zero amount
    data.forEach((item) => {
      // Use forEach instead of map as you are not returning anything
      if (item.amount !== 0) {
        isEmpty = false;
        newTotal += item.amount * item.price; // Accumulate total
      }
    });
    setEmptyCheck(isEmpty); // Update emptyCheck state based on accumulated result
    setTotal(newTotal); // Update total state with the accumulated value
  }, [data]);

  

  return (
    <div className="bg-white ml-6 h-fit p-6">
      <h1 className="text-lg font-semibold text-red-500">Your Cart (0)</h1>
      <div className="flex flex-col0">
        {emptyCheck ? (
          <div className="w-full p-8 px-20 flex flex-col justify-center items-center">
            <img src={empty} alt="" />
            <h1 className="text-xs">Your added items will appear here</h1>
          </div>
        ) : (
          <>
            <div>
              <Item data={data} total={total} setData={setData} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartList;
