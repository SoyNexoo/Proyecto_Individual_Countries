const {Country , Activity} = require("../db")

const getAllActivity = async (req, res) => {
    try {
        const allActivities = await Activity.findAll({include: Country});
        res.send(allActivities);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

const postActivity = async (req, res) => {
    const { name, dificultad, duracion, temporada, countries } = req.body;
  try {
    if (!name || !dificultad || !duracion || !temporada || !countries) res.status(400).send("Faltan datos!");

    let activity = await Activity.create({
      name,
      dificultad,
      duracion,
      temporada,
    });
    
    await activity.setCountries(countries); //* SETEA LA ACTIVIDAD EN COUNTRY


    const cratedActivity = await Activity.findOne({
      where: {id : activity.id},
      include: {
        model: Country,
        through:{
          attributes: [] //! Elimina timestamps
        }
      }
    })
    
    res.status(200).json({ msg: "Actividad creada con exito!", cratedActivity });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const deleteActivity = async (req, res) => {
  const {id} = req.params
  try {
    await Activity.destroy({where: {id: id}})
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
    getAllActivity,
    postActivity,
    deleteActivity
}