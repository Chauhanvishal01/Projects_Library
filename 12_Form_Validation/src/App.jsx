import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (name.length < 3)
      newErrors.name = "Name must be at least 3 characters long";
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is not valid";
    if (password.length < 8)
      newErrors.password = "Password must be at least 8 characters long";
    if (!/^\d{10}$/.test(phone))
      newErrors.phone = "Phone number must be 10 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="container">
      <h1>Form</h1>
      <form onSubmit={handleForm}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter your Name.."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter your email.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Enter Phone Number..."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
