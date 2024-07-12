import React, { useState } from "react";
import '../index.css'

const ToggleSwitch = () => {
  const [toggleSwitch, setToggleSwitch] = useState("off");

    const handleToggle = () => {
    setToggleSwitch(toggleSwitch === "off" ? "on":"off" )
}

  return (
    <div>
      <button onClick={handleToggle} className="  mx-60 my-10 px-10 py-3 bg-indigo-400 text-white rounded-lg">Toggle Switch : {toggleSwitch}</button>
    </div>
  );
};

export default ToggleSwitch;


/* function handleToggle() {
    if (toggleSwitch === "off") {
      setToggleSwitch("on");
    } else {
      setToggleSwitch("off");
    }
  } */