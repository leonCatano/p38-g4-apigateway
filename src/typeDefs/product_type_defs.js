const { gql } = require('apollo-server');
const productTypeDefs = gql `
  type Product {
    codeproduct : String!
    namestoreproduct: String!
    productname: String!
    precio: Int!
    categoria: String!
  }

  input ProductInput {
    codeproduct : String!
    namestoreproduct: String!
    productname: String!
    precio: Int!
    categoria: String!
  }

  extend type Mutation {
    createProduct( userId: Int!, productInput: ProductInput): Product
    updateProduct( userId: Int!, productInput: ProductInput): Product
    deleteProduct( userId: Int!, codeproduct : String!): String
  }

  extend type Query {
    productByCodeProduct(userId: Int!, codeproduct : String!): [Product]
    productByNameStore(userId: Int!, namestoreproduct : String!): [Product]

  }
`;
module.exports = productTypeDefs;
