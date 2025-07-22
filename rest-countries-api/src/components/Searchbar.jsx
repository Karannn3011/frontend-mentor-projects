import React from "react";
import { useCountry } from "../context/CountryContext";

const Searchbar = (props) => {
  const { countryData, setCountryData, allCountries } = useCountry();
  const handleSearch = () => {
    const searched = document.getElementById("countrysearch").value.toLowerCase();
    setCountryData(allCountries.filter((c) => c.name.official.toLowerCase().includes(searched) || c.name.common.toLowerCase().includes(searched)))
  }
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:px-7 gap-7 px-5 mt-7">
      <label className="input w-full md:max-w-120">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input onChange={handleSearch} id="countrysearch" type="search" required placeholder="Search" />
      </label>

      <select
        onChange={(e) => props.handleFilterChange(e)}
        defaultValue="Filter by Region"
        className="select w-40"
      >
        <option disabled>Filter by Region</option>
        <option>Africa</option>
        <option>Americas</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </div>
  );
};

export default Searchbar;
