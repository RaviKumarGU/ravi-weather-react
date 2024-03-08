import React, { useState } from "react";
import Header from "./Header";
import { filterForcecastdata, getWeatherForecast } from "./WeatherServices";
import WeatherForecast from "./WeatherForecast";
import Loader from "./Loader";

function App() {
  const [city, setCity] = useState("");
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch() {
    setLoading(true);
    setError("");

    try {
      const data = await getWeatherForecast(city);
      const filteredData = filterForcecastdata(data.list);
      setForecastData(filteredData);
    } catch (error) {
      setError("Error fetching weather forecast. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <Header handleSearch={handleSearch} city={city} setCity={setCity} />
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <WeatherForecast forecastData={forecastData} />
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default App;
