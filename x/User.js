/* eslint-disable func-names */
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  // Define the associations for the User model
  User.associate = function(models) {
    User.belongsToMany(models.Hotel, { through: models.Rate });
    User.belongsToMany(models.Room, { through: models.Reservation });
  };

  return User;
};
