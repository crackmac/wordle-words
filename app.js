const express = require("express");

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello Worlde!");
});

app.listen(port, () => {
  console.log("App is running");
});
