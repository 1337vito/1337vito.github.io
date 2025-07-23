const express = require("express");
const cors = require("cors");
const app = express();
const songs = require("./data/songs.json");

app.use(cors());
app.use(express.static("public"));

app.get("/api/songs", (req, res) => {
  res.json(songs);
});

module.exports = app;
