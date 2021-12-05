const creditCardTypeDefs = require('./creditCard_type_defs');
const transactionTypeDefs = require('./transaction_type_defs');
const authTypeDefs = require('./auth_type_defs');
const storeTypeDefs = require('./store_type_defs');
const productTypeDefs = require('./product_type_defs');

//Se unen
const schemasArrays = [authTypeDefs, creditCardTypeDefs, transactionTypeDefs, storeTypeDefs, productTypeDefs];
//Se exportan
module.exports = schemasArrays;
