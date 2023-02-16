const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const { MONGO_PORT } = require("../config.js");

const dbConect = async () => {
  try {
    await mongoose.connect(MONGO_PORT);
    console.log("se conecto a la base de datos");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = dbConect;
