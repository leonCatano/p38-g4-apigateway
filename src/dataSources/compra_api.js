const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class CompraAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.compra_api_url;
  }
  async createCreditCard(creditCardInput) {
    creditCard = new Object(JSON.parse(JSON.stringify(creditCardInput)));
    return await this.post(`/creditCard/${userIdToken}/`, creditCard);
  }
  async creditCardByUserId(userId) {
    return await this.get(`/creditCard/list/${userId}/`);
  }

  async updateCreditCard(creditCardId, creditCardInput) {
    creditCard = new Object(JSON.parse(JSON.stringify(creditCardInput)));
    return await this.put(`/creditCard/update/${userIdToken}/${creditCardId}`, creditCard);
  }

  async deleteCreditCard(creditCardId) {
    return await this.delete(`/creditCard/remove/${userIdToken}/${creditCardId}`);
  }

  async createTransaction(transactionInput) {
    transaction = new Object(JSON.parse(JSON.stringify(transactionInput)));
    return await this.post(`/transaction/${userIdToken}/`, transaction);
  }
  async transactionByIdUser(userId) {
    return await this.get(`/transaction/list/${userId}/`);
  }

  async updateTransaction(userId, transactionId, transactionInput) {
    transaction = new Object(JSON.parse(JSON.stringify(transactionInput)));
    return await this.put(`/transaction/update/${userId}/${transactionId}`, transaction);
  }

  async deleteTransaction(userId, transactionId) {
    return await this.delete(`/transaction/remove/${userId}/${transactionId}`);
  }
}
module.exports = CompraAPI;
