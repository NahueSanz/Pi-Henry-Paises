const { Activity } = require("../db");

const getActivities = async (req, res) => {
  try {
    const countries = await Activity.findAll();
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los países" });
  }
};

module.exports = { getActivities };
