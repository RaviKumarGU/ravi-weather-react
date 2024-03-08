import { IoSearchCircleOutline } from "react-icons/io5";

function SearchBar({ handleSearch, city, setCity }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:mx-20 md:flex-row">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name..."
        className="mr-2 w-48 rounded-md border border-orange-600 px-4 py-2 md:w-64"
      />
      <button
        className="w-24 rounded-md bg-orange-500 py-2 font-semibold text-white hover:bg-orange-600 md:w-32 md:px-4"
        onClick={handleSearch}
      >
        <div className="flex items-center justify-center gap-2">
          <span>
            <IoSearchCircleOutline />
          </span>
          <span className="text-sm md:text-lg">Search</span>
        </div>
      </button>
    </div>
  );
}

export default SearchBar;
