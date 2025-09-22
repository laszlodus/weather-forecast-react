import "./current-weather.css";
import { getWeatherIcon } from "../helpers/weatherHelper";

export default function CurrentWeather({ weatherData }) {
  if (!weatherData) return null;

  return (
    <section className="current-weather-container">
      <h1>Current Weather</h1>
      <ul className="current-weather-list">
        <li>Today</li>
        {weatherData.current.rain > 0 && (
          <li>
            Rain: {weatherData.current.rain}
            {weatherData.current_units.rain}
          </li>
        )}
        {weatherData.current.snowfall > 0 && (
          <li>
            Snowfall: {weatherData.current.snowfall}
            {weatherData.current_units.snowfall}
          </li>
        )}
        <li>
          {weatherData.current.temperature_2m}
          {weatherData.current_units.temperature_2m}
        </li>
        <li>
          <span>🌬️</span>
          {weatherData.current.wind_speed_10m}
          {weatherData.current_units.wind_speed_10m}
        </li>
        <div className="weather-icon">
          <li>{getWeatherIcon(weatherData.current.weather_code)}</li>
        </div>
      </ul>
    </section>
  );
}
