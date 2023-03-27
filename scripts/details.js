console.log("--- DETAILS ---");

const api_url = "https://mindhub-xj03.onrender.com/api/amazing";

async function getData(api_url) {
  try {
    const response = await fetch(api_url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
