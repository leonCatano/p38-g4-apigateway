const { gql } = require('apollo-server');
const storeTypeDefs = gql `
  type Store {
    Id : Int!
    name: String!
    detail: String!
    adress: String!
    idcliente: Int!
  }

  input StoreInput {
    name: String!
    detail: String!
    adress: String!
    idcliente: Int!
  }

  extend type Mutation {
    createStore( userId: Int!, storeInput: StoreInput): Store
    updateStore( userId: Int!, storeInput: StoreInput): Store
    deleteStore( userId: Int!, storename: String!): String

  }

  extend type Query {
    storeByStoreName(userId: Int!, storename: String!): [Store]
    storeByUserId(userId: Int!): [Store]
  }
`;
module.exports = storeTypeDefs;
