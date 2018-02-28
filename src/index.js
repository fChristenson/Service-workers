const express = require("express");
const app = express();
const path = require("path");

const notifications = [
  { text: "foo" },
  { text: "bar" },
  { text: "baz" },
  { text: "bax" }
];

const makePath = filename => {
  return path.resolve(__dirname, "..", "public", filename);
};

app.use(express.static(path.resolve(__dirname, "..", "public")));

app.get("/", (req, res) => {
  res.sendFile(makePath("index.html"));
});

app.get("/foo", (req, res) => {
  res.sendFile(makePath("foo.html"));
});

app.get("/bar", (req, res) => {
  res.sendFile(makePath("bar.html"));
});

app.get("/notifications", (req, res) => {
  res.json(notifications);
});

module.exports = app;
