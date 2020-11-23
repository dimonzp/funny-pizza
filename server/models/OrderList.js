const { Schema, model } = require("mongoose");

const schema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  street: { type: String, required: true },
  house: { type: String, required: true },
  flat: { type: Number },
  cart: Array,
  callMe: Boolean,
  comment: String,
});

module.exports = model("OrderList", schema);
