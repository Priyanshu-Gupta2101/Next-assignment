const Child1 = ({ incrementMoney }) => {
  return (
    <div>
      <button
        className="bg-white text-black p-4 mt-3 rounded-md"
        onClick={incrementMoney}
      >
        Increment
      </button>
    </div>
  );
};

export default Child1;
