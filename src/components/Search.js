import { useState } from "react";
import "./search.css";

export default function Search({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <div className="input-btn-container">
      <input
        className="search-input"
        value={city}
        placeholder="Search for location..."
        onChange={(e) => setCity(e.target.value)}
      ></input>
      <button
        className="search-btn"
        onClick={() => {
          onSearch(city);
          setCity("");
        }}
      >
        Search
      </button>
    </div>
  );
}
