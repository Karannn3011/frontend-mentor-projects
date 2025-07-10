// server/index.js
import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/shorten", async (req, res) => {
  const longUrl = req.body.url;

  try {
    // Fetching data from CleanURI API
    const response = await fetch("https://cleanuri.com/api/v1/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `url=${encodeURIComponent(longUrl)}`,
    });

    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`Error from CleanURI: ${response.statusText}`);
    }

    // Parsing the response JSON
    const data = await response.json();

    // If the data doesn't have result_url, throw an error
    if (!data.result_url) {
      throw new Error("CleanURI response doesn't contain result_url");
    }

    res.json(data); // Return the shortened URL
  } catch (error) {
    console.error("Error:", error.message); // Log the error in server console
    res.status(500).json({ error: error.message }); // Return the error message
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
