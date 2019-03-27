const Employee = require('../models/Employee');
const Manager = require('../models/Manager');

exports.getBooks = async () => {
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
  return await books;
}

exports.getEmployees = async () => {
  return await Employee.find({});
};

exports.getManagers = async () => {
  return await Manager.find({});
};

exports.getEmployee = async (root, args) => {
  let {name} = args;
  return await Employee.findOne({ 'name': name});
};

exports.addEmployee = async (root, args) => {
  let {employee} = args;
  return await Employee.create(employee);
};