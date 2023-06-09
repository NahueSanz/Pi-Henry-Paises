const axios = require("axios");
const { Country } = require("../db");

const getCountryData = async (req, res) => {
  try {
    const response = await axios.get(
      "https://rest-countries.up.railway.app/v3/all"
    );

    for (const countryData of response.data) {
      if (
        countryData.flag &&
        countryData.flag.length > 0 &&
        countryData.capital &&
        countryData.capital.length > 0
      ) {
        await Country.create({
          id: countryData.cca3,
          name: countryData.name.common,
          flagImage: countryData.flags[0],
          continent: countryData.region,
          capital: countryData.capital[0],
          subregion: countryData.subregion,
          area: countryData.area,
          population: countryData.population,
        });
      }
    }

    res
      .status(200)
      .send("Datos de países guardados correctamente en la base de datos");
  } catch (error) {
    res.status(500).send("Error al obtener y guardar los países");
  }
};

module.exports = {
  getCountryData,
};
