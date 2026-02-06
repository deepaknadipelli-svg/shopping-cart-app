const express = require("express");
const Cart = require("../models/Cart");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, async (req, res) => {
  let cart = await Cart.findOne({ userId: req.user._id });
  if (!cart) cart = new Cart({ userId: req.user._id, items: [] });
  cart.items.push(req.body.itemId);
  await cart.save();
  res.send(cart);
});

module.exports = router;
