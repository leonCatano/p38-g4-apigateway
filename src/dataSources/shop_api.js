const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class ShopAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.shop_api_url;
  }

  async createStore(userId, storeInput) {
    store = new Object(JSON.parse(JSON.stringify(storeInput)));
    return await this.post('/Stores', store);
  }
  async storeByStoreName(userId, storename) {
    return await this.get(`/store/${storename}/`);
  }

  async updateStore(userId, storeInput) {
    store = new Object(JSON.parse(JSON.stringify(storeInput)));
    return await this.put('/store/update', store);
  }

  async deleteStore(userId, storename) {
    return await this.delete(`/store/delete/${storename}`);
  }

  async createProduct(userId, productInput) {
    product = new Object(JSON.parse(JSON.stringify(productInput)));
    return await this.post('/products', product);
  }

  async productByCodeProduct(userId, codeproduct) {
    return await this.get(`/product/${codeproduct}`);
  }

  async updateProduct(userId, productInput) {
    product = new Object(JSON.parse(JSON.stringify(productInput)));
    return await this.put('/product/update', product);
  }

  async deleteProduct(userId, codeproduct) {
    return await this.delete(`/product/delete/${codeproduct}`);
  }
}
module.exports = ShopAPI;
