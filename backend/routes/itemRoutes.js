const express = require("express");
const Item = require("../models/Item");
const router = express.Router();

router.get("/", async (req, res) => {
  const items = await Item.find();
  res.send(items);
});

module.exports = router;
