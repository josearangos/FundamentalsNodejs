const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  fs.readFile("./my_page.html", (err, data) => {
    if (err) {
      console.error(err);
      return;
    } else {
      res.end(data);
    }
  });
});
console.log("Server Start");
server.listen(3300);
