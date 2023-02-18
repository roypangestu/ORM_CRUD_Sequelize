"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        "Users", // table name
        "password", // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
          after: "email",
        }
      ),
      queryInterface.addColumn("Users", "address", {
        type: Sequelize.STRING,
        allowNull: true,
        after: "lastName",
      }),
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn("Users", "password"),
      queryInterface.removeColumn("Users", "address"),
    ]);
  },
};
