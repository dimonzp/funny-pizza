const express = require("express");
const Product = require("../models/Product");
const productService = require("../services/ProductService");
const router = express.Router();

// fetch to /product/type
router.post("/type", async (req, res) => {
  try {
    const type = req.body.typeOfProduct;
    if (!type) {
      throw Error("no type");
    }
    const products = await productService.findProductsByType(type);
    res.json(products);
  } catch (error) {
    res.status(401).json({ message: "Get drink eror" });
  }
});
// fetch to /product
router.post("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw Error("no params");
    }

    const profile = await productService.findProductById(id);
    return res.status(200).json(profile);
  } catch (error) {
    res.status(401).json({ message: "Get drink eror" });
  }
});

module.exports = router;
