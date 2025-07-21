import React from "react";
import Searchbar from "./components/Searchbar";
import { useCountry } from "./context/CountryContext";
import { Link } from "react-router";

const Body = () => {
  const { countryData, setCountryData, allCountries } = useCountry();

  const handleFilterChange = (e) => {
    const region = e.target.value;
    if (region === "Filter by Region") {
      setCountryData(allCountries);
    } else {
      const tempCountryData = allCountries.filter((c) => c.region === region);
      setCountryData(tempCountryData);
    }
  };
  return (
    <div>
      <Searchbar handleFilterChange={handleFilterChange} />
      <main className="mt-7 md:mt-15 flex flex-col md:grid md:grid-cols-4 md:px-7 gap-8">
        {countryData.map((country, ix) => {
          return (
            <div
              key={ix}
              className="card bg-base-200 w-70 md:max-w-[90%] mx-auto shadow-lg"
            >
              <Link to={`/${country.alpha3Code}`}>
                <figure>
                  <img src={country.flags.png} alt={country.name} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{country.name}</h2>

                  <ul className="space-y-1 mt-3">
                    <li>
                      <p>
                        <strong>Population</strong>:{" "}
                        {country.population.toLocaleString()}{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Region</strong>: {country.region}{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Capital</strong>: {country.capital || "None"}{" "}
                      </p>
                    </li>
                  </ul>
                </div>
              </Link>
            </div>
          );
        })}

      </main>
    </div>
  );
};

export default Body;
