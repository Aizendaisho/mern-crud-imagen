const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const { MONGO_PORT } = require("../config.js");

const dbConect = async () => {
  try {
   const db = await mongoose.connect(MONGO_PORT);

   await console.log(
     `se conecto a la base de datos llamada ${db.connection.name}`
   );
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = dbConect;
