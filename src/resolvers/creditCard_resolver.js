const creditCardResolver = {
  Query: {
    creditCardByUserId: async(_, { userId }, { dataSources, userIdToken }) => {
      if (userId == userIdToken)
        return await dataSources.compraAPI.creditCardByUserId(userId)
      else
        return null
    },
  },
  Mutation: {
    createCreditCard: async (_, { creditCardInput }, { dataSources, userIdToken },  ) => {
      if (creditCardInput.id_user == userIdToken)
        return await dataSources.compraAPI.createCreditCard(creditCardInput)
      else
        return null
    },
    updateCreditCard: async (_, { creditCardId, creditCardInput }, { dataSources, userIdToken },  ) => {
      if (creditCardInput.id_user == userIdToken)
        return await dataSources.compraAPI.updateCreditCard(creditCardId, creditCardInput)
      else
        return null
    },
    deleteCreditCard: async (_, { creditCardId }, { dataSources, userIdToken },  ) => {
      if (creditCardInput.id_user == userIdToken)
        return await dataSources.compraAPI.deleteCreditCard(creditCardId)
      else
        return null
    },
  }
};
module.exports = creditCardResolver;
