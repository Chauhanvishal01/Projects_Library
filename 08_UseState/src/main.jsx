import React from "react";
import ReactDOM from "react-dom/client";
import ToggleSwitch from "./components/ToggleSwitch";
import CurrentDate from "./components/CurrentDate.jsx";
import CounterApp from "./components/CounterApp.jsx";
import FormDisplay from "./components/FormDisplay";
import BgChanger from "./components/BgChanger";
import Todo from "./components/Todo";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <CurrentDate />
    <CounterApp />
    <ToggleSwitch />
    <FormDisplay />
    <div className="flex justify-evenly">
    <BgChanger />
    <Todo />

    </div>
  </React.StrictMode>
);
