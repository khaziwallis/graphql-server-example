const {gql} = require('apollo-server');

const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: String
  }
  # This "Employee" type can be used in other type declarations.
  type Employee {
    id: String
    name: String
    designation: String
  }

  input EmployeeInput {
    id: String
    name: String
    designation: String
  }

  type Manager {
    id: String
    name: String
    designation: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book],
    employees: [Employee],
    managers: [Manager],
    getEmployee(name: String): Employee,
  }
  type Mutation {
    addEmployee(employee: EmployeeInput): Employee
  }
`;

module.exports = [typeDefs];