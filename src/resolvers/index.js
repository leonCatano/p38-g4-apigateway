const creditCardResolver = require('./creditCard_resolver');
const transactionResolver = require('./transaction_resolver');
const authResolver = require('./auth_resolver');
const storeResolver = require('./store_resolver');
const productResolver = require('./product_resolver');
const lodash = require('lodash');
const resolvers = lodash.merge(creditCardResolver, transactionResolver, authResolver, storeResolver, productResolver);
module.exports = resolvers;
