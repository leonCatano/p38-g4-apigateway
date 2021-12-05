const { gql } = require('apollo-server');
const creditCardTypeDefs = gql `
  type CreditCard {
    id : Int!
    card_name: String!
    card_number: Int!
    card_franchise: String!
    bank_name: String!
    id_user: Int!
  }

  input CreditCardInput {
    card_name: String!
    card_number: Int!
    card_franchise: String!
    bank_name: String!
    id_user: Int!
  }

  extend type Mutation {
    createCreditCard(creditCardInput: CreditCardInput): CreditCard
    updateCreditCard( creditCardId: Int!, creditCardInput: CreditCardInput): CreditCard
    deleteCreditCard( creditCardId: Int!): String

  }

  extend type Query {
    creditCardByUserId(userId: Int!): [CreditCard]
  }
`;
module.exports = creditCardTypeDefs;
