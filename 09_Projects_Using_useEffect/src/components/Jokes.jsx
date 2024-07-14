import React, { useState } from "react";
import '../App.css'
const Jokes = () => {
  const [jokes, setJokes] = useState("");
  const fetchApi = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => setJokes(data.value));
  };
  function handleClick() {
    fetchApi();
  }
  return (
    <div className="jokes">
      <h1>Jokes Generator</h1>
      <button onClick={handleClick}>Click Me</button>
      <p>{jokes}</p>
    </div>
  );
};

export default Jokes;
 