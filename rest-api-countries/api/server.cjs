// File: api/server.cjs
// This file uses CommonJS syntax (`require`/`module.exports`).

const express = require("express");
const axios = require("axios");
const cors = require("cors");

// Create an instance of an Express application
const app = express();

// --- Middleware ---
// Enable CORS (Cross-Origin Resource Sharing) for all routes.
app.use(cors());

// --- Routes ---
// Define a proxy endpoint. When deployed to Vercel, any file in the /api
// directory becomes an API route. Vercel will automatically handle routing
// requests for `/api/server` to this file.
app.get("/api/countries", async (req, res) => {
  try {
    // Make a request from this server to the external countries API
    const response = await axios.get("https://www.apicountries.com/countries");

    // Send the data received from the external API back to your React app
    res.json(response.data);
  } catch (error) {
    // If there's an error fetching from the external API, send an error response
    console.error("Error fetching from external API:", error.message);
    res
      .status(500)
      .json({ message: "Failed to fetch data from the external API." });
  }
});

// --- Server Logic ---
// For local development, we need to start a server.
// For Vercel deployment, we export the app.
if (process.env.VERCEL) {
  // Export the app for Vercel's serverless environment
  module.exports = app;
} else {
  // Start a local server for development
  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
  });
}
