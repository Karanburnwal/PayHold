const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
app.use(jsonParser);
app.use(express.json());
var cors = require("cors");
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log("server is running at port 5000");
});
