import "./App.css";

import { useEffect, useState } from "react";
import Header from "./components/Header.js";
import { getWeatherData } from "./services/getApiData.js";
import CurrentWeather from "./components/currentWeather.js";
import WeatherCard from "./components/WeatherCard.js";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      try {
        const data = await getWeatherData(lat, lng);
        if (!data) throw new Error("No data!");
        setWeatherData(data);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    });
  }, []);

  function Loading() {
    return <p>Loading...</p>;
  }

  function Error(error) {
    return <p>{error}</p>;
  }

  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/weather.webp)` }}
    >
      <Header className="App-header" />
      {loading && <Loading />}
      {error !== "" && <Error />}
      {!loading && error === "" && <CurrentWeather weatherData={weatherData} />}
      {!loading && error === "" && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default App;
