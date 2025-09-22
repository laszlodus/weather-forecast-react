export async function getWeatherData(lat, lng) {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=snowfall_sum,sunset,sunrise,rain_sum,showers_sum,temperature_2m_max,temperature_2m_min,weather_code,uv_index_max,wind_speed_10m_max&current=rain,showers,snowfall,temperature_2m,wind_speed_10m,weather_code&timezone=auto&wind_speed_unit=mph`
  );
  if (!res.ok) throw new Error("Api request failed!");
  const data = await res.json();
  return data;
}
