const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

let visitors = 0;

app.get("/", (req, res) => {
  res.send("Black Dragon Backend Running");
});

app.get("/visit", (req, res) => {
  visitors++;
  res.json({
    totalVisitors: visitors
  });
});

app.get("/stats", (req, res) => {
  res.json({
    totalVisitors: visitors
  });
});

app.listen(process.env.PORT || 3000);
