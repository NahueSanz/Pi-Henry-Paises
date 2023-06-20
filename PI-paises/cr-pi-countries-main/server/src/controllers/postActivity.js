const { Activity, Country, conn } = require("../db");
const { Op } = require("sequelize");

const countriesNameToId = async (countries) => {
  try {
    if (!Array.isArray(countries)) {
      throw new Error("La variable 'countries' no es un arreglo.");
    }

    console.log(countries);

    const countriesLowerCase = countries.map((country) =>
      country.toLowerCase()
    );

    console.log(countriesLowerCase);

    const arrCountries = await Country.findAll({
      where: conn.where(conn.fn("lower", conn.col("name")), {
        [Op.in]: countriesLowerCase,
      }),
      attributes: ["id"],
    });

    console.log(arrCountries);

    if (arrCountries.length > 0) {
      const idArray = arrCountries.map((country) => country.dataValues.id);
      return idArray;
    }

    return null;
  } catch (error) {
    console.log("Error en la función countriesNameToId:", error);
  }
};

const postActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;

    if (!name || !difficulty || !duration || !season || !countries) {
      return res.status(400).json({ error: "Faltan datos requeridos" });
    }
    const countriesId = await countriesNameToId(countries);
    if (countriesId === null) {
      throw new Error("El pais ingresado es invalido");
    }
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    await newActivity.addCountries(countriesId);
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la actividad turística" });
  }
};

module.exports = { postActivity };
