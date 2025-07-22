import React, { useEffect, useState } from "react";
import { useCountry } from "./context/CountryContext";
import { useParams, useNavigate, Link } from "react-router"; // Import useNavigate
import axios from "axios";
const CountryDetails = () => {
  const { name } = useParams();
  const { allCountries } = useCountry();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/alpha/${name}`
        );
        setSelectedCountry(response.data[0]); // <-- Use the first item
      } catch (err) {
        console.error("Error fetching the country data:", err);
      }
    };

    fetchCountryData();
  }, [name, allCountries]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <main className="px-5 py-6">
      <button onClick={handleBack} className="btn gap-2">
        <svg
          className="w-6 h-6"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="currentColor"
              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
            ></path>
            <path
              fill="currentColor"
              d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
            ></path>
          </g>
        </svg>

        <span>Back</span>
      </button>

      {selectedCountry ? (
        <div className="mt-7 md:mt-12 md:flex md:justify-around md:items-start ">
          <img
            className="md:w-1/2 md:max-w-130"
            src={selectedCountry?.flags?.svg}
            alt={selectedCountry.name}
          />

          <section className="mt-8 md:mt-0 md:w-1/2 md:px-10">
            <h1 className="text-2xl font-bold">
              {selectedCountry?.name?.official}
            </h1>
            <div className="md:mt-7 md:flex md:justify-between md:gap-x-10 md:items-start">
              <ul className="space-y-1 mt-5 md:mt-0">
                <li>
                  <p>
                    <span className="font-semibold">Native Name</span>:{" "}
                    {selectedCountry?.name?.nativeName
      ? Object.values(selectedCountry.name.nativeName)
          .map((nn) => nn.official)
          .join(", ")
      : "None"}
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-semibold">Population</span>:{" "}
                    {selectedCountry?.population?.toLocaleString()}
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-semibold">Region</span>:{" "}
                    {selectedCountry?.region}
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-semibold">Sub Region</span>:{" "}
                    {selectedCountry.subregion}
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-semibold">Capital</span>:{" "}
                    {selectedCountry.capital}
                  </p>
                </li>
              </ul>
              <ul className="space-y-1 mt-7 md:mt-0">
                <li>
                  <p>
                    <span className="font-semibold">Top Level Domain</span>:{" "}
                    {selectedCountry?.tld[0] || "None"}
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-semibold">Currencies</span>:{" "}
                    {selectedCountry.currencies
                      ? Object.values(selectedCountry.currencies)
                          .map((currency) => currency.name)
                          .join(", ")
                      : "None"}
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-semibold">Languages</span>:{" "}
                    {selectedCountry.languages
                      ? Object.values(selectedCountry.languages)
                    .join(", ") : "None"}
                  </p>
                </li>
              </ul>
            </div>

            <h1 className="text-lg font-semibold mt-7">Border Countries:</h1>
            <div className="flex grow flex-wrap gap-x-3 gap-y-2 mt-3">
              {selectedCountry.borders?.map((border, kx) => {
                const borderCountry = allCountries.find(
                  (c) => c.cca3 === border
                );
                return (
                  <Link key={kx} to={`/${border}`}>
                    <button className="btn">
                      {borderCountry ? borderCountry.name.common : border}
                    </button>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      ) : (
        <p>Loading country details...</p>
      )}
    </main>
  );
};

export default CountryDetails;
