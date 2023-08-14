const {Country , Activity} = require("../db")
const {Op} = require("sequelize")

const allCountries = async (req, res) =>{
  try {
    const allCountries = await Country.findAll({
      include: Activity,
      through:{
        attributes:[]
      }
    });
    return res.status(200).send(allCountries);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const getCountryByName = async (req, res) => {
  let { pais } = req.query;
  try {
    const minusMayus = {
      [Op.or]: [
        {
          name: {
            [Op.like]: `${pais}%`,
          },
        },
        {
          name: {
            [Op.iLike]: `${pais}%`,
          },
        },
      ],
    };

    const countryName = await Country.findAll({
      where: minusMayus,
      });
    res.status(200).json(countryName);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}



const getCountryById = async (req, res) => {
  const { idPais } = req.params;
  try {
    const countryID = await Country.findOne({
      where: {
        id: idPais,
      },
      include: {
        model: Activity
      },
      through:{
        attributes:[]
      }
    });
    res.status(200).send(countryID);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


module.exports = {
  allCountries,
  getCountryById,
  getCountryByName
}