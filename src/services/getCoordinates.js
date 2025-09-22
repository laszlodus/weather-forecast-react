import { getWeatherData } from "./getApiData";

export default async function getCoordiantes(city) {
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`
  );
  if (!res.ok) throw new Error("No city found");
  const data = await res.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("No city found!");
  }
  const { name, latitude, longitude } = data.results[0];
  const weatherData = await getWeatherData(latitude, longitude);
  return { cityName: name, weatherData };
}
