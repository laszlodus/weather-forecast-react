import Search from "./Search";
import "./header.css";

export default function Header({ onSearch, city }) {
  return (
    <header className="header">
      <h1>Weather and forecast</h1>
      <Search onSearch={onSearch} />
      <h2>{city}</h2>
    </header>
  );
}
