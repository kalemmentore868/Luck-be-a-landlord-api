const mongoose = require("mongoose");

const Item = require("./models/item");

mongoose
  .connect(
    "mongodb+srv://kalem868:kiojah123@cluster0.ulzyh.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Mongo connection open");
  })
  .catch((err) => {
    console.log("error");
    console.log(err);
  });

// const i = new Item({
//   name: "Shiny Pebble",
//   rarity: "common",
//   description:
//     "You are 1.1x more likely to find Uncommon, Rare, and Very Rare symbols.",
//   goldPerTurn: 0,
// });

// i.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const seedData = [
  {
    name: "Shiny Pebble",
    rarity: "common",
    description:
      "You are 1.1x more likely to find Uncommon, Rare, and Very Rare symbols.",
    goldPerTurn: 0,
  },
  {
    name: "Magpie",
    rarity: "rare",
    description:
      "You are 1.1x more likely to find Uncommon, Rare, and Very Rare symbols.",
    goldPerTurn: 1,
  },
  {
    name: "Human",
    rarity: "very rare",
    description:
      "You are 1.1x more likely to find Uncommon, Rare, and Very Rare symbols.",
    goldPerTurn: 9,
  },
  {
    name: "Dragon",
    rarity: "uncommon",
    description:
      "You are 1.1x more likely to find Uncommon, Rare, and Very Rare symbols.",
    goldPerTurn: -1,
  },
  {
    name: "Shiny big stone",
    rarity: "common",
    description:
      "You are 1.1x more likely to find Uncommon, Rare, and Very Rare symbols.",
    goldPerTurn: 10,
  },
  {
    name: "ragdoll",
    rarity: "rare",
    description:
      "You are 1.1x more likely to find Uncommon, Rare, and Very Rare symbols.",
    goldPerTurn: 2,
  },
  {
    name: "Human child",
    rarity: "very rare",
    description:
      "You are 1.1x more likely to find Uncommon, Rare, and Very Rare symbols.",
    goldPerTurn: 10,
  },
  {
    name: "Dragon tail",
    rarity: "uncommon",
    description:
      "You are 1.1x more likely to find Uncommon, Rare, and Very Rare symbols.",
    goldPerTurn: -3,
  },
  {
    name: "King",
    rarity: "very rare",
    description:
      "You are 1.1x more likely to find Uncommon, Rare, and Very Rare symbols.",
    goldPerTurn: 100,
  },
  {
    name: "Warrior",
    rarity: "uncommon",
    description:
      "You are 1.1x more likely to find Uncommon, Rare, and Very Rare symbols.",
    goldPerTurn: 30,
  },
];

Item.insertMany(seedData)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
