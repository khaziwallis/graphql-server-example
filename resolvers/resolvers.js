const Employee = require('../models/Employee');
const Manager = require('../models/Manager');

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  }
];

const employees = [
  {
    id: '1',
    name: 'khazi',
    designation: 'Software Engineer'
  },
  {
    id: '2',
    name: 'afzal',
    designation: 'Software Consultant'
  }
];

const resolvers = {
    Query: {
      books: async () => { return await books},
      employees: async () =>  {
        return await Employee.find({});
      },
      managers: async () =>  {
        return await Manager.find({});
      },
      getEmployee: async (root, {name}) => {
        return await Employee.findOne({ 'name': name});
      }
    },
};
module.exports = resolvers;