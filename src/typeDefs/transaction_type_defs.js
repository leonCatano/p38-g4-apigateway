const { gql } = require('apollo-server');
const transactionTypeDefs = gql `
  type Transaction  {
    id: Int!
    transaction_date: String!
    transaction_status: String!
    transaction_value: Int!
    store_name: String!
    credit_card: CreditCard!
  }

  input TransactionInput {
    transaction_status: String!
    transaction_value: Int!
    store_name: String!
    id_credit_card: Int!
    transaction_date: String!
  }

  extend type Mutation {
    createTransaction( userId: Int!, transactionInput :TransactionInput ): String
    updateTransaction( userId: Int!, transactionId: Int!, transactionInput :TransactionInput ): Transaction
    deleteTransaction( userId: Int!, transactionId: Int! ): String
  }

  extend type Query {
    transactionByIdUser(userId: Int!): [Transaction]
  }
`;
module.exports = transactionTypeDefs;
