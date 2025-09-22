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
              {new Date(weatherData.daily.time[index]).toLocaleDateString(
                "en-GB",
                {
                  weekday: "short",
                }
              )}
            </li>
            {weatherData.daily.rain_sum[index] > 0 && (
              <li>
                <span>🌧️</span>
                {weatherData.daily.rain_sum[index]}
                {weatherData.daily_units.rain_sum}
              </li>
            )}
            {weatherData.daily.snowfall_sum[index] > 0 && (
              <li>
                <span>❄️</span>
                {weatherData.daily.snowfall_sum[index]}
                {weatherData.daily_units.snowfall_sum}
              </li>
            )}
            <li>
              <span>🌅</span>
              {new Date(weatherData.daily.sunrise[index]).toLocaleTimeString(
                "en-GB",
                {
                  hour: "2-digit",
                  minute: "2-digit",
                }
              )}
            </li>
            <li>
              <span>🌇</span>
              {new Date(weatherData.daily.sunset[index]).toLocaleTimeString(
                "en-GB",
                {
                  hour: "2-digit",
                  minute: "2-digit",
                }
              )}
            </li>
            <li>
              {weatherData.daily.temperature_2m_max[index]}
              {weatherData.daily_units.temperature_2m_max}
            </li>
            <li>
              {weatherData.daily.temperature_2m_min[index]}
              {weatherData.daily_units.temperature_2m_min}
            </li>
            <li>uv: {weatherData.daily.uv_index_max[index]}</li>
            <li>
              <span>🌬️</span> {weatherData.daily.wind_speed_10m_max[index]}
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
