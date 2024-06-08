const Child2 = ({ decrementMoney }) => {
  return (
    <div>
      <button
        className="bg-white text-black p-4 mt-3 rounded-md"
        onClick={decrementMoney}
      >
        Decrement
      </button>
    </div>
  );
};

export default Child2;
