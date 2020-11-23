const Product = require("../models/Product");

const productService = {
  findProductById(id) {
    return Product.findById(id);
  },
  findProductsByType(type) {
    return Product.find({ product: type });
  },
  async getProductToCart(cart) {
    const fullCart = await Promise.all(
      cart.map(async (ci) => {
        const obj = ci.toObject();
        obj.product = await this.findProductById(ci.productId.toString());
        return obj;
      })
    );
    return fullCart;
  },
};

module.exports = productService;
