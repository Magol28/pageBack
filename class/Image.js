const { Sequelize, DataTypes, Model } = require('sequelize');

//  sequelize = new Sequelize('postgres', 'postgres', 'root', {
//     host: 'localhost',
//     dialect: 'postgres' 
//   });
  
  const sequelize = new Sequelize(
    'postgres://poeczbkigfqyci:5af3db3de06f6f0464735b44f73b448a992e4c065f186ed1219bfdec3eee2a2f@ec2-18-209-187-54.compute-1.amazonaws.com:5432/d39huihd2db8j5    ', {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: true
    }
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
