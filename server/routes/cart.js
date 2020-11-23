const express = require("express");
const orderListService = require("../services/OrderListService");
const productService = require("../services/ProductService");
const userService = require("../services/UserService");
const router = express.Router();

// /cart/changeOne
router.put("/changeOne", async (req, res) => {
  try {
    const { changeQuantity, productId, params } = req.body;
    if (changeQuantity != true && changeQuantity != false) {
      throw Error("No change flag");
    }
    if (!productId) {
      throw Error("No product");
    }

    await userService.changeOneInCart(
      req.user.email,
      productId,
      changeQuantity,
      params
    );

    res.status(200).json({ message: "Added successfully" });
  } catch (error) {
    res.status(400).json(error);
  }
});

// /cart/delete
router.delete("/delete", async (req, res) => {
  try {
    await userService.pullFromCart(req.user.email, req.body.id);
    res.status(200).json({ message: "Delete successfully" });
  } catch (error) {
    res.status(400).json({ message: "Delete from cart error" });
  }
});

// /cart/checkout
router.post("/checkout", async (req, res) => {
  try {
    await orderListService.createOrder(req.body.order);
    await userService.setNewUserData(req.user.email, req.body.order);
    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(400).json({ message: "Checkout error" });
  }
});

// /cart/get
router.get("/get", async (req, res) => {
  try {
    const user = await userService.getMe(req.user.email);
    const fullCart = await productService.getProductToCart(user.cart);
    res.status(200).json(fullCart);
  } catch (error) {
    res.status(400).json({ message: "Checkout error" });
  }
});

module.exports = router;
