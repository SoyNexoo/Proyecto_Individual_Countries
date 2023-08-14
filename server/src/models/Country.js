const { DataTypes } = require("sequelize");
const validUrlRegex = /^(https?:\/\/)?\S+\.(jpeg|jpg|gif|png)$/i; //! VERIFICA QUE SEA UNA URL QUE TERMINE EN JPEG, JPG, GIF O PNG
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Country", {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
      unique: true,
      validate: {
        is: /^[A-Za-z]$/, // A B C D... Z
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: {
          args: [validUrlRegex],
        },
      },
    },
    continente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    poblacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lenguas : {
      type: DataTypes.STRING,
      allowNull: true
    },
    emoji:{
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {timestamps: false}
  );
};
