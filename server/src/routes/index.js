const { Router } = require("express");
const routerCountries = require("./routerCountries");
const routerActivities= require("./routerActivities")

require("dotenv").config();
// const { Country, Activity } = require("../db");
// const { Op } = require("sequelize");
// // const {API_URL} = process.env
const router = Router();

router.use("/countries" , routerCountries)
router.use("/activities" , routerActivities)



// //* RUTAS GET!
// router.get("/countries", async (req, res) => {
//   try {
//     const allCountries = await Country.findAll({
//       include: Activity.name,
//       through:{
//         attributes:[]
//       }
//     });
//     res.status(200).json(allCountries);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


// router.get("/countries/name", async (req, res) => {
//   let { pais } = req.query;
//   try {
//     const minusMayus = {
//       [Op.or]: [
//         {
//           name: {
//             [Op.like]: `%${pais}%`,
//           },
//         },
//         {
//           name: {
//             [Op.iLike]: `%${pais}%`,
//           },
//         },
//       ],
//     };

//     const countryName = await Country.findAll({
//       where: minusMayus,
//       include: Activity,
//       through:{
//         attributes:[]
//       }
//       });
//     res.status(200).json(countryName);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


// router.get("/countries/:idPais", async (req, res) => {
//   const { idPais } = req.params;
//   try {
//     const countryID = await Country.findOne({
//       where: {
//         id: idPais,
//       },
//       include: {
//         model: Activity
//       },
//       through:{
//         attributes:[]
//       }
//     });
//     res.status(200).send(countryID);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });





// router.get("/activities", async (req, res) => {
//   try {
//     const allActivities = await Activity.findAll({include: Country});
//     res.send(allActivities);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// router.post("/activities", async (req, res) => {
//   const { name, dificultad, duracion, temporada, countries } = req.body;
//   try {
//     if (!name || !dificultad || !duracion || !temporada || !countries) res.status(400).send("Faltan datos!");

//     let activity = await Activity.create({
//       name,
//       dificultad,
//       duracion,
//       temporada,
//     });
    
//     await activity.setCountries(countries); //* SETEA LA ACTIVIDAD EN COUNTRY


//     const cratedActivity = await Activity.findOne({
//       where: {id : activity.id},
//       include: {
//         model: Country,
//         through:{
//           attributes: [] //! Elimina timestamps
//         }
//       }
//     })
//     res.status(200).json({ msg: "Actividad creada con exito!", cratedActivity });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

module.exports = router;
