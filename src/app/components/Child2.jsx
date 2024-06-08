const Child2 = ({ decrementMoney }) => {
  return (
    <div>
      <h2>Child2 Component</h2>
      <button onClick={decrementMoney}>Decrement Money by 500</button>
    </div>
  );
};

export default Child2;
