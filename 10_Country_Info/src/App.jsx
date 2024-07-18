import { useState } from "react";
import "./App.css";

function App() {
  const [country, setCountry] = useState(null);
  const [countryName, setCountryName] = useState("");

  const fetchCountry = async () => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      if (!res.ok) {
        throw new Error("Country Not found");
      }
      const data = await res.json();
      console.log(data[0]);
      setCountry(data[0]);
    } catch (error) {
      console.log("Error fetching Country", error);
    }
  };

  return (
    <main>
      <div className="inputs">
        <input
          type="text"
          placeholder="Enter country name here..."
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />
        <button onClick={fetchCountry}>Search</button>
      </div>
      <div className="output">
        {country ? (
          <div className="details">
            <div>
              <h1>
                Country Name:<span>{country.name.official}</span>
              </h1>
              <p>
                Country Flag: <span>{country.flag}</span>
              </p>
              <p>
                Capital : <span>{country.capital[0]}</span>
              </p>
              <p>
                Population: <span>{country.population}</span>
              </p>
              <p>Area: <span>{country.area}</span></p>
              <p>Region <span>{country.region}</span></p>
            </div>
          </div>
        ) : (
          <h1>Loading....</h1>
        )}
      </div>
    </main>
  );
}

export default App;
