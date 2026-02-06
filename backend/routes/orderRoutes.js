const express = require("express");
const Cart = require("../models/Cart");
const Order = require("../models/Order");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user._id });
  if (!cart || cart.items.length === 0) return res.status(400).send("Cart is empty");
  const order = new Order({ userId: req.user._id, items: cart.items });
  await order.save();
  cart.items = [];
  await cart.save();
  res.send("Order placed");
});

module.exports = router;
