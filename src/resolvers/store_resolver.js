const storeResolver = {
  Query: {
    storeByStoreName: async(_, { userId, storename }, { dataSources, userIdToken }) => {
      if (userId == userIdToken)
        return await dataSources.shopAPI.storeByStoreName(userId, storename)
      else
        return null
    },
    storeByUserId: async(_, { userId }, { dataSources, userIdToken }) => {
      if (userId == userIdToken) {
        console.log(userId)
        return await dataSources.shopAPI.storeByUserId(userId)
      } else
        return null
    },
  },
  Mutation: {
    createStore: async (_, { userId, storeInput }, { dataSources, userIdToken }) => {
      if ( userId == userIdToken)
        return await dataSources.shopAPI.createStore(userId, storeInput)
      else
        return null
    },
    updateStore: async (_, { userId, storeInput }, { dataSources, userIdToken }) => {
      if ( userId == userIdToken)
        return await dataSources.shopAPI.updateStore(userId, storeInput)
      else
        return null
    },
    deleteStore: async (_, {  userId, storename }, { dataSources, userIdToken }) => {
      if ( userId == userIdToken)
        return await dataSources.shopAPI.deleteStore(userId, storename)
      else
        return null
    },
  }
};
module.exports = storeResolver;
