/* eslint-disable func-names */
module.exports = (sequelize, Sequelize) => {
  const Reservation = sequelize.define('Reservation', {
    checkInDate: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    checkOutDate: {
      type: Sequelize.DATEONLY,
      allowNull: false
    }
  });

  // Define the associations for the Reservation model
  Reservation.associate = function(models) {
    Reservation.belongsTo(models.User);
    Reservation.belongsTo(models.Room);
  };

  return Reservation;
};
