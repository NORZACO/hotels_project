module.exports = (sequelize, Sequelize) => {
  const Room = sequelize.define('Room', {
    roomNumber: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    roomType: {
      type: Sequelize.STRING,
      allowNull: false
    },
    roomPrice: {
      type: Sequelize.FLOAT,
      allowNull: false
    }
  });

  // Define the associations for the Room model
  Room.associate = function(models) {
    Room.belongsTo(models.Hotel);
    Room.belongsToMany(models.User, { through: models.Reservation });
  };

  return Room;
};
