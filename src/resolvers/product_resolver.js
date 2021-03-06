const productResolver = {
  Query: {
    productByCodeProduct: async(_, { userId, codeproduct }, { dataSources, userIdToken }) => {
      if (userId == userIdToken)
        return await dataSources.shopAPI.productByCodeProduct(userId, codeproduct)
      else
        return null
    },
    productByNameStore: async(_, { userId, namestoreproduct }, { dataSources, userIdToken }) => {
      if (userId == userIdToken)
        return await dataSources.shopAPI.productByNameStore(userId, namestoreproduct)
      else
        return null
    },
    productByUserId: async(_, { userId }, { dataSources, userIdToken }) => {
      if (userId == userIdToken)
        return await dataSources.shopAPI.productByUserId(userId)
      else
        return null
    },
  },
  Mutation: {
    createProduct: async (_, { userId, productInput }, { dataSources, userIdToken }) => {
      if ( userId == userIdToken)
        return await dataSources.shopAPI.createProduct(userId, productInput)
      else
        return null
    },
    updateProduct: async (_, { userId, productInput }, { dataSources, userIdToken }) => {
      if ( userId == userIdToken)
        return await dataSources.shopAPI.updateProduct(productInput)
      else
        return null
    },
    deleteProduct: async (_, {  userId, codeproduct }, { dataSources, userIdToken }) => {
      if ( userId == userIdToken)
        return await dataSources.shopAPI.deleteProduct(codeproduct)
      else
        return null
    },
  }
};
module.exports = productResolver;
