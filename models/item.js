const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rarity: {
    type: String,
    enum: ["common", "uncommon", "rare", "very rare"],
    required: true,
  },
  description: {
    type: String,
  },
  goldPerTurn: {
    type: Number,
  },
});

const Item = mongoose.model("items", itemSchema);

module.exports = Item;
