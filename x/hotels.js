/* eslint-disable func-names */
module.exports = (sequelize, Sequelize) => {
    const Hotel = sequelize.define('Hotel', {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  
    // Define the associations for the Hotel model
    Hotel.associate = function(models) {
      Hotel.hasMany(models.Room);
      Hotel.belongsToMany(models.User, { through: models.Rate });
    };
  
    return Hotel;
  };
  