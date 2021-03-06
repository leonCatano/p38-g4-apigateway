const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const CompraAPI = require('./dataSources/compra_api');
const AuthAPI = require('./dataSources/auth_api');
const ShopAPI = require('./dataSources/shop_api');
const authentication = require('./utils/authentication');
const server = new ApolloServer({
  context: authentication,
  typeDefs,
  resolvers,
  dataSources: () => ({
    compraAPI: new CompraAPI(),
    authAPI: new AuthAPI(),
    shopAPI: new ShopAPI(),

  }),
  introspection: true,
  playground: true
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
console.log(`Server ready at ${url}`);
});
