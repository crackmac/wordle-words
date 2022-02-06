"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

// Static files
app.use(express.static("public"));
// Specific folder example
// app.use("/css", express.static(__dirname + "public/css"));
// app.use("/js", express.static(__dirname + "public/js"));
// app.use("/img", express.static(__dirname + "public/images"));

// Set Views
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("", (req, res) => {
  res.render("index", { text: "Wordle Words" });
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.listen(port, () => {
  console.log("App is running");
});
