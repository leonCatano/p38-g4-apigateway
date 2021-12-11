const transactionResolver = {
  Query: {
    transactionByIdUser: async(_, { userId }, { dataSources, userIdToken }) => {
      if (userId == userIdToken)
        return dataSources.compraAPI.transactionByIdUser(userId)
      else
        return null
    }
  },
  Mutation: {
    createTransaction: async(_, { userId, transactionInput }, { dataSources, userIdToken }) => {
      if ( userId == userIdToken ) {
        console.log(userId);
        return dataSources.compraAPI.createTransaction(userId, transactionInput)
      } else
        return null
    },
    updateTransaction: async (_, { userId, transactionId, transactionInput }, { dataSources, userIdToken },  ) => {
      if (userId == userIdToken)
          return await dataSources.compraAPI.updateTransaction(userId, transactionId, transactionInput)
        else
          return null
      },
      deleteTransaction: async (_, { userId, transactionId }, { dataSources, userIdToken },  ) => {
        if ( userId == userIdToken)
          return await dataSources.compraAPI.deleteTransaction(userId, transactionId)
        else
          return null
      },
  }
};
module.exports = transactionResolver;
