const Child1 = ({ incrementMoney }) => {
  return (
    <div>
      <h2>Child1 Component</h2>
      <button onClick={incrementMoney}>Increment Money by 1000</button>
    </div>
  );
};

export default Child1;
