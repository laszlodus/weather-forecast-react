import "./current-weather.css";
import { getWeatherIcon } from "../helpers/weatherHelper";

export default function CurrentWeather({ weatherData }) {
  if (!weatherData) return null;
  const formatted = new Date(weatherData.current.time).toLocaleDateString(
    "en-GB"
  );

  return (
    <section className="current-weather-container">
      <h1>Current Weather</h1>
      <ul className="current-weather-list">
        <li>Date: {formatted}</li>
        <li>
          Rain: {weatherData.current.rain}
          {weatherData.current_units.rain}
        </li>
        <li>
          Showers: {weatherData.current.showers}
          {weatherData.current_units.showers}
        </li>
        <li>
          Snowfall: {weatherData.current.snowfall}
          {weatherData.current_units.snowfall}
        </li>
        <li>
          Temperature: {weatherData.current.temperature_2m}
          {weatherData.current_units.temperature_2m}
        </li>
        <li>
          Wind speed: {weatherData.current.wind_speed_10m}
          {weatherData.current_units.wind_speed_10m}
        </li>
        <div className="weather-icon">
          <li>{getWeatherIcon(weatherData.current.weather_code)}</li>
        </div>
      </ul>
    </section>
  );
}
