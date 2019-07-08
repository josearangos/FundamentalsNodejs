const express = require("express");
const app = express();
const { PORT } = require("./config");

require("./5webServices/routes/api")(app);
require("./5webServices/routes/views")(app);

function init() {
  console.log("initialize server");
  app.listen(PORT, () => {
    console.log("The server express is active");
  });
}

init();
