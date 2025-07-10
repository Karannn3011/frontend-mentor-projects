export default async function testShortenUrl(urls) {
  const url = urls;
  console.log(url);

  try {
    const response = await fetch("https://url-api-cwgb.onrender.com/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();

    if (response.ok && data.result_url) {
      console.log("Shortened URL:", data.result_url);
      return data.result_url;
    } else {
      console.error("Error shortening URL:", data.error || "Unknown error");
    }
  } catch (error) {
    console.error("Network error:", error);
  }
}
