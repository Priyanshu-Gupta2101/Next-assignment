"use client";
import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent = () => {
  const [money, setMoney] = useState(0);

  const incrementMoney = () => {
    setMoney((prevMoney) => prevMoney + 1000);
  };

  const decrementMoney = () => {
    setMoney((prevMoney) => prevMoney - 500);
  };

  return (
    <div className="border border-white p-4">
      <p>Money: {money}</p>
      <div className="flex gap-3">
        <Child1 incrementMoney={incrementMoney} />
        <Child2 decrementMoney={decrementMoney} />
      </div>
    </div>
  );
};

export default Parent;
