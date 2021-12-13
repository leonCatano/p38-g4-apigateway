const { gql } = require('apollo-server');
const productTypeDefs = gql `
  type Product {
    codeproduct : String!
    namestoreproduct: String!
    productname: String!
    precio: Int!
    categoria: String!
    userId: Int!
  }

  input ProductInput {
    codeproduct : String!
    namestoreproduct: String!
    productname: String!
    precio: Int!
    categoria: String!
    userId: Int!
  }

  extend type Mutation {
    createProduct( userId: Int!, productInput: ProductInput): Product
    updateProduct( userId: Int!, productInput: ProductInput): Product
    deleteProduct( userId: Int!, codeproduct : String!): String
  }

  extend type Query {
    productByCodeProduct(userId: Int!, codeproduct : String!): [Product]
    productByNameStore(userId: Int!, namestoreproduct : String!): [Product]
    productByUserId(userId: Int!): [Product]
  }
`;
module.exports = productTypeDefs;
