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
      const ccInput = {
        card_name: creditCardInput.card_name,
        card_number: creditCardInput.card_number,
        card_franchise: creditCardInput.card_franchise,
        bank_name: creditCardInput.bank_name,
        id_user: creditCardInput.id_user,
      }
      if ( ccInput.id_user == userIdToken){
        return await dataSources.compraAPI.createCreditCard(ccInput)
      }else
        return null
    },
    updateCreditCard: async (_, { creditCardId, creditCardInput }, { dataSources, userIdToken },  ) => {
      if (creditCardInput.id_user == userIdToken)
        return await dataSources.compraAPI.updateCreditCard(creditCardId, creditCardInput)
      else
        return null
    },
    deleteCreditCard: async (_, { userId, creditCardId }, { dataSources, userIdToken },  ) => {
      if (userId == userIdToken)
        return await dataSources.compraAPI.deleteCreditCard(userId, creditCardId)
      else
        return null
    },
  }
};
module.exports = creditCardResolver;
