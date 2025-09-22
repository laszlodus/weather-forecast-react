import "./App.css";

import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header.js";
import { getWeatherData } from "./services/getApiData.js";
import getCoordiantes from "./services/getCoordinates.js";
import CurrentWeather from "./components/currentWeather.js";
import WeatherCard from "./components/WeatherCard.js";
import Footer from "./components/Footer.js";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");

  const fetchCurrentLocationWeather = useCallback(() => {
    errorHandling();
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
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
      },
      (geoError) => {
        console.error(geoError.message);
        setError("Please enable location services or search manual!");
        setLoading(false);
      }
    );
  }, []);

  useEffect(() => {
    fetchCurrentLocationWeather();
  }, [fetchCurrentLocationWeather]);

  function Loading() {
    return <p className="message-style">Loading...</p>;
  }

  function ErrorComp() {
    return (
      <div className="error-container">
        <p className="message-style">{error}</p>
        <button className="error-btn" onClick={errorHandling}>
          OK
        </button>
      </div>
    );
  }

  function errorHandling() {
    setError("");
  }

  async function searchCity(city) {
    try {
      setCity("");
      setWeatherData(null);
      errorHandling();
      setLoading(true);
      const { cityName, weatherData } = await getCoordiantes(city);
      setWeatherData(weatherData);
      setCity(cityName);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <Header className="App-header" onSearch={searchCity} city={city} />
      <div className="main-container">
        {loading && <Loading />}
        {error && <ErrorComp />}
        {!weatherData && error && (
          <div className="current-location-container">
            <button
              className="current-location-btn"
              onClick={() => fetchCurrentLocationWeather()}
            >
              Current Location
            </button>
          </div>
        )}
        {!loading && !error && <CurrentWeather weatherData={weatherData} />}
        {!loading && !error && <WeatherCard weatherData={weatherData} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
