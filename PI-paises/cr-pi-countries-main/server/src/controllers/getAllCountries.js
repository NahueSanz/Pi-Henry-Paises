const { Country } = require("../db");
const { Op } = require("sequelize");

const getFiltersObject = (filters) => {
  const filtersObject = {};

  if (typeof filters === "object" && Object.keys(filters).length === 0) {
    return filtersObject;
  }

  if (!Array.isArray(filters)) {
    const [key, value] = filters.split("=");
    filtersObject[key] = value;
  } else {
    filters.forEach((filter) => {
      const [key, value] = filter.split("=");
      filtersObject[key] = value;
    });
  }

  return filtersObject;
};

async function getAllCountries(req, res) {
  const page = parseInt(req.query.page) || 1;
  const pageSize = 10;
  const startIndex = (page - 1) * pageSize;
  const filters = req.query.filters || {};
  const whereClause = {};

  //hacer filtros que llegan por query
  const conditions = getFiltersObject(filters);

  Object.keys(conditions).forEach((key) => {
    whereClause[key] = conditions[key];
  });

  try {
    const countries = await Country.findAll({
      where: {
        [Op.and]: whereClause,
      },
      offset: startIndex,
      limit: pageSize,
    });
    const totalRecords = await Country.count({ where: conditions });
    const totalPages = Math.ceil(totalRecords / pageSize);
    res.status(200).json({ countries, totalPages, page });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los países xd" });
  }
}

module.exports = { getAllCountries };

// const { Country } = require("../db");

// async function getAllCountries(req, res) {
//   try {
//     const countries = await Country.findAll();
//     res.status(200).json(countries);
//   } catch (error) {
//     res.status(500).json({ error: "Error al obtener los países" });
//   }
// }

// module.exports = { getAllCountries };
