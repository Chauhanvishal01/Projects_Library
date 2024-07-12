import React, { useState, useEffect } from "react";
import "../index.css";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="w-80 h-40 shadow-lg shadow-gray-500 rounded-xl absolute left-[50%] top-20 mb-4 text-center p-5">
      <p className="m-5">
        Counter : <span className="font-bold text-2xl">{counter}</span>{" "}
      </p>
      <div className="flex justify-between">
        <button
          onClick={() => setCounter(counter + 1)}
          className=" px-4 bg-green-400 text-xl text-white rounded-lg"
        >
          Increment
        </button>
        <button
          onClick={() => setCounter(counter - 1)}
          className="px-4 bg-red-400 text-white text-xl rounded-lg"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
/*  function handleIncr() {
   return setCounter(counter + 1);
  }
  function handleDecr() {
   return setCounter(counter - 1);
  } */

{
  /* <button onClick={handleIncr}>Increment</button>
      <button onClick={handleDecr}>Decrement</button> */
}
