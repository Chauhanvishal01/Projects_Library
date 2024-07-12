import React, { useState } from "react";
import '../index.css'

const FormDisplay = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name, email });
    setName('')
    setEmail('')
  };

  return (
    <div className="border-2 w-[50%] m-auto text-center  rounded-lg shadow-xl lg:w-[30%]">
      <h1 className="font-bold mt-1 text-2xl">Enter your details</h1>
      <form onSubmit={handleSubmit} className="flex  flex-col p-2">
        <input
          type="text"
          placeholder="Enter your name...."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="px-3 py-2 bg-yellow-300 w-1/2 m-auto rounded-lg my-3">Submit</button>
      </form>

      <div>
        <h3 className="font-bold">Your details Are:</h3>
        <p className="m-2">Hello <span>{formData.name}</span></p>
        <p>Your email is : <span>{formData.email}</span></p>
      </div>
    </div>
  );
};

export default FormDisplay;
