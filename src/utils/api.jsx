//Apiden veri çekme işlemeri people, films, planets

const BASE_URL = "https://swapi.dev/api";

export const fetchCharacters = async (url = `${BASE_URL}/people/`) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Response was not ok!");
    }
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error("error:", error);
  }
};

export const fetchFilms = async (url = `${BASE_URL}/films/`) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Response was not ok!");
    }
    const responseJson = response.json();
    return responseJson;
  } catch (error) {
    console.error("error", error);
  }
};

export const fetchPlanet = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Response was not ok!");
    }
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error("error:", error);
  }
};
