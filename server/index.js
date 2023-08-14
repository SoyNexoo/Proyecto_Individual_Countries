require("dotenv").config()
const {API_URL} = process.env
const axios = require("axios");
const server = require("./src/server");
const { conn , Country} = require('./src/db.js');

const PORT = 3001;

conn.sync({ alter: true }).then(() => {
server.listen(PORT, async () => {
  const allCountries = await Country.findAll(); // 
  if(!allCountries.length){
    const {data} = await axios(`http://localhost:5000/countries`);
    const countryDB = data.map((country) =>{
      const languagesArray = country.languages ? Object.values(country.languages) : [];
      const lenguas = languagesArray.join(", ")
      

      return{
        id: country.cca3,
        name: country.name.common,
        flag: country.flags.png,
        continente: country.region,
        capital: country.capital ? country.capital[0] : "No encontre nada!!!!!!!",
        poblacion: country.population,
        lenguas : lenguas,
        emoji: country.flag
      }
    })
      await Country.bulkCreate(countryDB)
      
  }
  console.log(`Server running on.... ${PORT} `);
})
}).catch(error => console.error(error))
