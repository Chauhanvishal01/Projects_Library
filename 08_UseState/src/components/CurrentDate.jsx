import React from "react";
import '../index.css'
import CurrentDateTime from "../Hooks/CurrentDateTime";
const CurrentDate = () => {
    const {dateString,timeString} = CurrentDateTime()
  return (
    <div className="mb-52">
      <h1 className="text-center text-2xl  m-4 font-bold text-rose-400">Vishal Chauhan</h1>
      <div className="w-60 h-28  border-2 py-6 px-5 ml-10 m-10 shadow-lg shadow-gray-400 rounded-lg  absolute left-48 top-20">
      <p>Today Date is <span className="font-bold"> {dateString}</span></p>
      <p>Current Time is:<span className="font-bold">  {timeString}</span></p>

      </div>
     
    </div>
  );
};

export default CurrentDate;
