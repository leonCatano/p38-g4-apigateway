const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class ShopAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.shop_api_url;
  }

  async createStore(userId, storeInput) {
    return await this.post('/stores', storeInput);
  }
  async storeByStoreName(userId, storename) {
    return await this.get(`/store/${storename}`);
  }

  async storeByUserId(userId) {
    return await this.get(`/store/user/${userId}`);
  }

  async updateStore(userId, storeInput) {
    return await this.put('/store/update', storeInput);
  }

  async deleteStore(userId, storename) {
    return await this.delete(`/store/delete/${storename}`);
  }

  async createProduct(userId, productInput) {
    return await this.post('/products', productInput);
  }

  async productByCodeProduct(userId, codeproduct) {
    return await this.get(`/product/${codeproduct}`);
  }

  async productByUserId(userId) {
    return await this.get(`/product/user/${userId}`);
  }

  async productByNameStore(userId, namestoreproduct) {
    return await this.get(`/product/store/${namestoreproduct}`);
  }

  async updateProduct(productInput) {
    return await this.put('/product/update', productInput);
  }

  async deleteProduct(codeproduct) {
    return await this.delete(`/product/delete/${codeproduct}`);
  }
}
module.exports = ShopAPI;
