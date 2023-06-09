const { Activity, Country } = require("../db");

const postActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;

    // Verificar que se hayan proporcionado los datos requeridos
    if (!name || !difficulty || !duration || !season || !countries) {
      return res.status(400).json({ error: "Faltan datos requeridos" });
    }

    // Crear la actividad turística en la base de datos
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });

    // Relacionar la actividad con los países indicados
    await newActivity.addCountries(countries);

    res.status(201).json(newActivity);
  } catch (error) {
    console.error("Error al crear la actividad turística:", error);
    res.status(500).json({ error: "Error al crear la actividad turística" });
  }
};

module.exports = { postActivity };
