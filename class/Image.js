const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres' 
  });
  


  const Image = sequelize.define("Image", {
    idimage: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
    },
    temperature: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date:{
      type: DataTypes.DATE,
      allowNull: false
    },
    location:{
      type:DataTypes.STRING,
      allowNull: false
    }
},{
    sequelize,
    freezeTableName: true,
    timestamps: true,
});

module.exports = Image;