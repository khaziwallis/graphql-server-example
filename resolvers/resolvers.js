const Employee = require('../models/Employee');
const Manager = require('../models/Manager');
//const getBooks = require('../collectors/Collector');
const collector = require("../collectors/Collector.js");
const resolvers = {
    Query: {
      books: collector.getBooks,
      employees: collector.getEmployees,
      managers: collector.getManagers,
      getEmployee:  collector.getEmployee
    },
};
module.exports = resolvers;