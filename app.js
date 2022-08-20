const express = require("express");
const app = express();
const mongoose = require("mongoose");
const itemsController = require("./controller/itemsController.js");

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

app.use(express.json());

app.use("/api/items", itemsController);

app.get("*", function (req, res) {
  res.status(404).json({
    message: `Can't find resource`,
  });
});

app.listen(3000, () => {
  console.log("app is listening on Port 3000...");
});
