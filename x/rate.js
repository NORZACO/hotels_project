/* eslint-disable func-names */
module.exports = (sequelize, Sequelize) => {
  const Rate = sequelize.define('Rate', {
    rating: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });

  // Define the associations for the Rate model
  Rate.associate = function(models) {
    Rate.belongsTo(models.User);
    Rate.belongsTo(models.Hotel);
  };

  return Rate;
};

