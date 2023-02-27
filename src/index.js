const dbConect = require("../db/db.js");
const { PORT } = require("../config.js");
const app = require("../app.js")


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  dbConect();
});
