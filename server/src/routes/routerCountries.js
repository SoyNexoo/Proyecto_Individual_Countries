const {Router } = require("express")
const {allCountries, getCountryById, getCountryByName} = require("../controllers/controllersCountry")
const routerCountries = Router()

routerCountries.get("/", allCountries)
routerCountries.get("/name", getCountryByName)
routerCountries.get("/:idPais", getCountryById)

module.exports = routerCountries