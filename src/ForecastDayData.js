import { formatDate } from "./WeatherServices";

function ForecastDayData({ dayData }) {
  const { date, min, max, pressure, humidity } = dayData;

  return (
    <div className="flex items-center justify-center">
      <table className="min-w-full table-auto border-collapse border-2 border-slate-900 text-center text-lg font-medium md:text-xl">
        <tbody>
          <tr>
            <td
              className="border-1 border-slate-900 bg-orange-600 px-4 py-2 text-center font-bold"
              colSpan={2}
            >
              Date: {formatDate(date)}
            </td>
          </tr>
          <tr>
            <td
              className="border-1 border-slate-900 px-4 py-2 text-center"
              colSpan={2}
            >
              Temperature
            </td>
          </tr>
          <tr>
            <td className="border border-slate-900 px-4 py-2">Min</td>
            <td className="border border-slate-900 px-4 py-2">Max</td>
          </tr>
          <tr>
            <td className="border border-slate-900 px-4 py-2">{min}</td>
            <td className="border border-slate-900 px-4 py-2">{max}</td>
          </tr>
          <tr>
            <td className="border border-slate-900 px-4 py-2">Pressure</td>
            <td className="border border-slate-900 px-4 py-2">{pressure}</td>
          </tr>
          <tr>
            <td className="border border-slate-900 px-4 py-2">Humidity</td>
            <td className="border border-slate-900 px-4 py-2">{humidity}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ForecastDayData;
