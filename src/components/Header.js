import { useState } from "react";
import "./header.css";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <header className="header">
      <h1>Weather and forecast app</h1>
      <div className="input-btn-container">
        <input
          className="search-input"
          value={searchValue}
          placeholder="Search for location..."
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <button className="search-btn">Search</button>
      </div>
    </header>
  );
}
