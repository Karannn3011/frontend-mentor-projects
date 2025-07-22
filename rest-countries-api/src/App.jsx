import React from "react";
import { CountryProvider } from "./context/CountryContext";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter, Routes } from "react-router";
import Body from "./Body";
import CountryDetails from "./CountryDetails";
const App = () => {
  return (
    <CountryProvider>
      <BrowserRouter>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/:name" element={<CountryDetails />} />
        </Routes>
      </BrowserRouter>
    </CountryProvider>
  );
};

export default App;
