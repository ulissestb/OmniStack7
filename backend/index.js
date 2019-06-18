const express = require("express");

const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  return res.send("Hello world");
});

console.log("listening port 3000");
