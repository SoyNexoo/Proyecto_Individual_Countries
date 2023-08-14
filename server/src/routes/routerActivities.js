const {Router } = require("express")
const {getAllActivity, postActivity, deleteActivity} = require("../controllers/controllersActivity")
const routerActivities = Router()

routerActivities.get("/", getAllActivity)
routerActivities.post("/", postActivity)
routerActivities.delete("/delete/:id", deleteActivity)

module.exports = routerActivities