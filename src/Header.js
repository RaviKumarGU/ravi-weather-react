import SearchBar from "./SearchBar";

function Header({ handleSearch, city, setCity }) {
  return (
    <div className="mx-2 mt-5 flex flex-col items-center justify-between gap-4 font-bold md:mx-10 md:flex-row md:justify-start">
      <h1 className="text-2xl text-orange-400 md:text-3xl">
        Weather in your city
      </h1>
      <SearchBar handleSearch={handleSearch} city={city} setCity={setCity} />
    </div>
  );
}

export default Header;
