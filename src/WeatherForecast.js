import ForecastDayData from "./ForecastDayData";

function WeatherForecast({ forecastData }) {
  return (
    <div className="mt-8 flex w-auto flex-col items-center gap-8 p-10 md:w-3 md:flex-row">
      {forecastData.map((data, index) => (
        <ForecastDayData dayData={data} />
      ))}
    </div>
  );
}

export default WeatherForecast;
