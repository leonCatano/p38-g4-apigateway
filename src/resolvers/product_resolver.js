const productResolver = {
  Query: {
    productByCodeProduct: async(_, { userId, codeproduct }, { dataSources, userIdToken }) => {
      if (userId == userIdToken)
        return await dataSources.shopAPI.productByCodeProduct(userId, codeproduct)
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
        return await dataSources.shopAPI.updateProduct(userId, productInput)
      else
        return null
    },
    deleteProduct: async (_, {  userId, codeproduct }, { dataSources, userIdToken }) => {
      if ( userId == userIdToken)
        return await dataSources.shopAPI.deleteProduct(userId, storename)
      else
        return null
    },
  }
};
module.exports = productResolver;
