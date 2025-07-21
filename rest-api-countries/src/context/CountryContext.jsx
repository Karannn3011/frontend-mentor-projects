// src/contexts/CountryContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [countryData, setCountryData] = useState([]);
  const [allCountries, setAllCountries] = useState([]); // <-- Add this state

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get("/api/countries");
        setCountryData(response.data);
        setAllCountries(response.data); // <-- Store original data
      } catch (err) {
        console.error("Error fetching the country data:", err);
      }
    };

    fetchCountryData();
  }, []);
  // ...existing code...
  const contextValue = {
    countryData,
    setCountryData,
    allCountries, // <-- Provide allCountries in context
  };

  return (
    <CountryContext.Provider value={contextValue}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error("useCountry must be used within a CountryProvider");
  }
  return context;
};
