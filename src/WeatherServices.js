const API_KEY = "1635890035cbba097fd5c26c8ea672a1";

const getWeatherForecast = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather forecast:", error);
    throw error;
  }
};

const filterForcecastdata = (data) => {
  const filteredData = [];
  for (let i = 0; i < data.length; i++) {
    const forecastEntry = data[i];

    const date = forecastEntry.dt_txt.split(" ")[0];
    console.log(date);
    const existingEntry = filteredData.find((entry) => entry.date === date);

    if (!existingEntry) {
      filteredData.push({
        date: date,
        min: forecastEntry.main.temp_min,
        max: forecastEntry.main.temp_max,
        pressure: forecastEntry.main.pressure,
        humidity: forecastEntry.main.humidity,
      });
    }
  }
  return filteredData.slice(0, 5);
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export { getWeatherForecast, formatDate, filterForcecastdata };
