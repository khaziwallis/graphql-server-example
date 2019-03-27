const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Person = new Schema({
    _type: String,
    name: String
});

let Employee = new Schema({
    _type: {type: String, default: 'Employee'},
	id: String,
	name: String,
	designation: String
});

let Manager = new Schema({
    _type: {type: String, default: 'Manager'},
    id: String,
	name: String,
	designation: String
});

Person.methods.iam = function() { return 'Person'; };
Employee.methods.iam = function() { return 'Employee'; };
Manager.methods.iam = function() { return 'Manager'; };

var Base = mongoose.model('Person', Person, 'Persons');

Base.Employee = mongoose.model('Employee', Person, 'Persons');
Base.Manager = mongoose.model('Manager', Company, 'Persons');

var init = Base.prototype.init;
init.Employee = new Base.Employee().__proto__;
init.Manager = new Base.Manager().__proto__;
Base.prototype.init = function (doc, fn) {
  var obj = init.apply(this,arguments);
  obj.__proto__ = init[doc._type];
  return obj;
};
module.exports = Base;
