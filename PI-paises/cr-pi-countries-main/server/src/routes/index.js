const { Router } = require("express");
const { getCountryData } = require("../controllers/getCountryData");
const { getAllCountries } = require("../controllers/getAllCountries");
const { getCountryById } = require("../controllers/getCountryById");
const { getCountryByName } = require("../controllers/getCountryByName");
const { postActivity } = require("../controllers/postActivity");
const { getActivities } = require("../controllers/getActivities");
const router = Router();

// router.post("/signin", createNewUser);
router.get("/", getCountryData);
router.get("/all", getAllCountries);
router.get("/activities", getActivities);
router.get("/search/:name", getCountryByName);
router.get("/detail/:idPais", getCountryById);
router.post("/activities", postActivity);

module.exports = router;
