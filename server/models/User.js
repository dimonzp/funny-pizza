const e = require("express");
const { Schema, model, Types } = require("mongoose");
const Product = require("./Product");

const isEmpty = (obj) => {
  return !Object.keys(obj).length;
};

const sameParams = (prod, params) => {
  if (prod.params) {
    return !Object.keys(prod.params || {}).find(
      (k) => !params[k] || params[k] !== prod.params[k]
    );
  }
  return isEmpty(params);
};

const findItemInCart = (cart, productId, params) => {
  return cart.find(
    (ci) => ci.productId.toString() === productId && sameParams(ci, params)
  );
};

const cartItem = new Schema({
  productId: { type: Types.ObjectId, required: true },
  quantity: { type: Number, default: 1, required: true },
  params: { type: Object },
});

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: String,
  phone: String,
  street: String,
  house: String,
  flat: String,
  cart: [{ type: cartItem }],
});

schema.method("addItemToCart", async function (productId, params) {
  const product = await Product.findById(productId);
  if (!product) throw Error("no product");

  const productItem = findItemInCart(this.cart, productId, params);

  if (productItem) {
    productItem.quantity += 1;
  } else {
    this.cart.push({ productId, params });
  }
  await this.save();
});

schema.method("removeItemFromCart", async function (productId, params) {
  const productItem = findItemInCart(this.cart, productId, params);
  if (!productItem) throw Error("no product");

  if (productItem.quantity > 1) {
    productItem.quantity -= 1;
    await this.save();
  }
});

module.exports = model("User", schema);
