if (process.env.NODE_ENV !== "production") require("dotenv").config();

const MONGO_PORT = process.env.MONGO_PORT;
const PORT = process.env.PORT || 8080;

module.exports = { PORT, MONGO_PORT };
