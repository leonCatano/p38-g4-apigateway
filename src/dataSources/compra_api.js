const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class CompraAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.compra_api_url;
  }

  async createCreditCard(ccInput) {
    return await this.post(`/creditCard/${ccInput.id_user}/`, ccInput);
  }

  async creditCardByUserId(userId) {
    return await this.get(`/creditCard/list/${userId}/`);
  }

  async updateCreditCard(creditCardId, creditCardInput) {
    return await this.put(`/creditCard/update/${creditCardInput.id_user}/${creditCardId}/`, creditCardInput);
  }

  async deleteCreditCard(userId, creditCardId) {
    return await this.delete(`/creditCard/remove/${userId}/${creditCardId}/`);
  }

  async createTransaction(userId, transactionInput) {
    return await this.post(`/transaction/${userId}/`, transactionInput);
  }
  async transactionByIdUser(userId) {
    return await this.get(`/transaction/list/${userId}/`);
  }

  async updateTransaction(userId, transactionId, transactionInput) {
    return await this.put(`/transaction/update/${userId}/${transactionId}/`, transactionInput);
  }

  async deleteTransaction(userId, transactionId) {
    return await this.delete(`/transaction/remove/${userId}/${transactionId}/`);
  }
}
module.exports = CompraAPI;
