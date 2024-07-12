import React, { useState } from "react";
import "../index.css";
const Todo = () => {
  const [addtodo, setAddtodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputs = (e) => {
    setInputValue(e.target.value);
  };
  const additem = () => {
    if (inputValue.trim()) {
      setAddtodo([...addtodo, inputValue]);
      setInputValue("");
    }
  };
  const deleteitem = () => {
    setAddtodo([]);
  };
  return (
    <div className="h-80 w-96   bottom-10 my-48 shadow-xl  shadow-gray-500 rounded-xl">
      <div className="inputs px-1 py-5 flex justify-between items-center ">
        <input
          type="text"
          className="border-2 border-green-500 rounded-lg outline-none text-sm px-3  w-[70%]  "
          placeholder="Add a new todo...."
          value={inputValue}
          onChange={handleInputs}
        />
        <button
          className="px-5 py-1  border-2 rounded-lg bg-green-400 text-xl"
          onClick={additem}
        >
          Add
        </button>
        <button
          className="px-5 py-1  border-2 rounded-lg bg-rose-400 text-xl"
          onClick={deleteitem}
        >
          Delete
        </button>
      </div>
      {addtodo.length > 0 ? (
        <ul>
          {addtodo.map((todo, idx) => (
            <li key={idx}>{todo}</li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-2xl">No todos yet</p>
      )}
    </div>
  );
};

export default Todo;
{
  /* <p>{addtodo}</p>
        <button className="px-5 py-1 border-2 rounded-lg bg-green-400 text-xl">
          ❌
        </button> */
}
