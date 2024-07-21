import React, { useState } from "react";

const SuperHero = () => {
  const [superHeroName, setSuperHeroName] = useState("");
  const [superHeroData, setSuperHeroData] = useState(null);
  const [names, setNames] = useState([]);

  const handleChange = (e) => {
    setSuperHeroName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://akabab.github.io/superhero-api/api/all.json"
      );
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const superheros = await res.json();
      const foundSuperHero = superheros.find(
        (hero) => hero.name.toLowerCase() === superHeroName.toLowerCase()
      );
      if (foundSuperHero) {
        setSuperHeroData(foundSuperHero);
      } else {
        setSuperHeroData(null);
        alert(`Superhero ${superHeroName} not found!`);
      }
      const names = superheros.map((hero) => hero.name);
      setNames(names);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <div className="container">
      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search...."
            value={superHeroName}
            onChange={handleChange}
            className="input-field"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
      <div className="cards">
        <div className="superhero-card details-card">
          {superHeroData && (
            <div className="superhero-details">
              <img
                src={superHeroData.images.lg}
                alt={superHeroData.name}
                className="superhero-image"
              />
              <div>
                <h2>{superHeroData.name}</h2>
                <p>Full name: {superHeroData.biography.fullName}</p>
                <p>Eye color: {superHeroData.appearance.eyeColor}</p>
                <p>Hair color: {superHeroData.appearance.hairColor}</p>
                <p>Publisher: {superHeroData.biography.publisher}</p>
                <p>First Appearance: {superHeroData.biography.firstAppearance}</p>
              </div>
            </div>
          )}
        </div>
        <div className="superhero-card list-card">
          <h1>SuperHero Names</h1>
          <ul>
            {names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SuperHero;
