import "./weather-card.css";
import { getWeatherIcon } from "../helpers/weatherHelper";

export default function WeatherCard({ weatherData }) {
  if (!weatherData) return null;

  return (
    <main className="container-main">
      <h1>7 days forecast</h1>
      <section className="weather-card-container">
        {weatherData.daily.time.map((day, index) => (
          <ul key={index} className="weather-card-list">
            <li>
              Date:{" "}
              {new Date(weatherData.daily.time[index]).toLocaleDateString(
                "en-GB"
              )}
            </li>
            <li>
              Rain: {weatherData.daily.rain_sum[index]}
              {weatherData.daily_units.rain_sum}
            </li>
            <li>
              Showers: {weatherData.daily.showers_sum[index]}
              {weatherData.daily_units.showers_sum}
            </li>
            <li>
              Snowfall: {weatherData.daily.snowfall_sum[index]}
              {weatherData.daily_units.snowfall_sum}
            </li>
            <li>
              Sunrise:{" "}
              {new Date(weatherData.daily.sunrise[index]).toLocaleTimeString(
                "en-GB",
                {
                  hour: "2-digit",
                  minute: "2-digit",
                }
              )}
            </li>
            <li>
              Sunset:{" "}
              {new Date(weatherData.daily.sunset[index]).toLocaleTimeString(
                "en-GB",
                {
                  hour: "2-digit",
                  minute: "2-digit",
                }
              )}
            </li>
            <li>
              Temperature max: {weatherData.daily.temperature_2m_max[index]}
              {weatherData.daily_units.temperature_2m_max}
            </li>
            <li>
              Temperature min: {weatherData.daily.temperature_2m_min[index]}
              {weatherData.daily_units.temperature_2m_min}
            </li>
            <li>Uv index: {weatherData.daily.uv_index_max[index]}</li>
            <li>
              Wind speed: {weatherData.daily.wind_speed_10m_max[index]}
              {weatherData.daily_units.wind_speed_10m_max}
            </li>
            <li className="weather-icon">
              {getWeatherIcon(weatherData.daily.weather_code[index])}
            </li>
          </ul>
        ))}
      </section>
    </main>
  );
}
