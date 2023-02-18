"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          "users",
          "password",
          {
            type: Sequelize.STRING,
            after: "email",
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          "users",
          "address",
          {
            type: Sequelize.STRING,
            after: "lastName",
          },
          { transaction: t }
        ),
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn("users", "password", {
          transaction: t,
        }),
        queryInterface.removeColumn("users", "address", {
          transaction: t,
        }),
      ]);
    });
  },
};
