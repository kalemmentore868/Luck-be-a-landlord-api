const express = require("express");
const router = express.Router();
const Item = require("../models/item.js");

router.get("/", async (req, res) => {
  const items = await Item.find({});
  res.json({
    message: "A list of all the items",
    data: items,
  });
});

router.get("/:itemName", async (req, res) => {
  const { itemName } = req.params;
  const item = await Item.findOne({ name: itemName });
  if (!item) {
    res.status(404).json({
      message: `Item with name :${itemName} cannot be found`,
    });
  } else {
    res.json({
      message: `the item with name ${itemName}`,
      data: item,
    });
  }
});

router.post("/", async (req, res) => {
  const itemData = req.body;
  const newItem = new Item(itemData);
  await newItem.save();
  res.status(201).json({
    message: "An item was created!",
    data: newItem,
  });
});

router.put("/:itemName", async (req, res) => {
  const { itemName } = req.params;
  const item = await Item.findOneAndUpdate({ name: itemName }, req.body, {
    runValidators: true,
    new: true,
  });

  if (!item) {
    res.status(404).json({
      message: `Item with name ${itemName} cannot be found`,
    });
  } else {
    res.json({
      message: `the item with name ${itemName} was updated`,
      data: item,
    });
  }
});

router.delete("/:itemName", async (req, res) => {
  const { itemName } = req.params;
  const item = await Item.findOne({ name: itemName });
  if (!item) {
    res.status(404).json({
      message: `Item with name ${itemName} cannot be found`,
    });
  } else {
    await Item.deleteOne({ name: itemName });
    res.json({
      message: `the item with name ${itemName} was deleted`,
    });
  }
});

module.exports = router;
