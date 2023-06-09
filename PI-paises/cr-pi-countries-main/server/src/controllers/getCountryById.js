const { Country } = require("../db");

const getCountryById = async (req, res) => {
  try {
    const { idPais } = req.params;
    const country = await Country.findOne({
      where: { id: idPais },
    });

    if (!country) {
      return res.status(404).json({ error: "País no encontrado wey" });
    }

    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el detalle del país" });
  }
};

module.exports = { getCountryById };
