import React, { useState, useEffect } from "react";
import "../index.css";
const BgChanger = () => {
  const [color, setcolor] = useState("");

  return (
    <div className=" my-20 text-center w-1/2 border-2  shadow-xl shadow-gray-500 rounded-lg">
    <h1 className="font-bold text-2xl mt-2"> Background Changer</h1>
      <div
        className="h-80 w-80 m-10 rounded-lg shadow-xl shadow-gray-500 "
        style={{ background: `${color}` }}
      ></div>
      <div>
        <button
          className="m-10 px-10 py-2 bg-blue-900 text-white rounded"
          onClick={() => setcolor("blue")}
        >
          Blue
        </button>
        <button
          className="m-10 px-10 py-2 bg-red-500 text-white rounded"
          onClick={() => setcolor("red")}
        >
          Crimson
        </button>
        <button
          className="m-10 px-10 py-2 bg-green-500 text-white rounded"
          onClick={() => setcolor("green")}
        >
          green
        </button>
        <button
          className="m-10 px-10 py-2 bg-orange-500 text-white rounded"
          onClick={() => setcolor("orange")}
        >
          orange
        </button>
        <button
          className="m-10 px-10 py-2 bg-yellow-500  rounded"
          onClick={() => setcolor("yellow")}
        >
          yellow
        </button>
        <button
          className="m-10 px-10 py-2 bg-teal-400  rounded"
          onClick={() => setcolor("teal")}
        >
          Teal
        </button>
      </div>
    </div>
  );
};

export default BgChanger;
