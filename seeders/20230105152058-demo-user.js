"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        firstName: "John",
        lastName: "Doe",
        email: "example@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Dhani",
        lastName: "Ngaidhi",
        email: "dhani@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Irvan",
        lastName: "Sivni",
        email: "sinvi@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
