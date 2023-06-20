const { Activity, Country } = require("../db");

const getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll({
      include: [
        {
          model: Country,
          attributes: ["id", "name"],
        },
      ],
    });
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las actividades" });
  }
};

module.exports = { getActivities };
