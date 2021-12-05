const { gql } = require('apollo-server');
const storeTypeDefs = gql `
  type Store {
    Id : String!
    storename: String!
    detail: Int!
    adress: String!
    idcliente: Int!
  }

  input StoreInput {
    storename: String!
    detail: Int!
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
  }
`;
module.exports = storeTypeDefs;
