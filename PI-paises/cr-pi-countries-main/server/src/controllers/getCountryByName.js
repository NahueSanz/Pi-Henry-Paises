const { Country } = require("../db");
const { Op } = require("sequelize");

const getCountryByName = async (req, res) => {
  try {
    const { name } = req.params;
    const countries = await Country.findAll({
      where: { name: { [Op.iLike]: `%${name}%` } },
    });
    if (countries.length === 0) {
      return res.status(404).json({ error: "No se encontraron países" });
    }

    res.status(200).json(countries);
  } catch (error) {
    console.error("Error al obtener los países por nombre:", error);
    res.status(500).json({ error: "Error al obtener los países por nombre" });
  }
};
module.exports = { getCountryByName };
