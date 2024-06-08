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
    <div>
      <h1>Parent Component</h1>
      <p>Money: {money}</p>
      <Child1 incrementMoney={incrementMoney} />
      <Child2 decrementMoney={decrementMoney} />
    </div>
  );
};

export default Parent;
