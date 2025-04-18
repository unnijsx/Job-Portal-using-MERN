const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./router");
const db = require("./dbConnection");

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", router);

app.listen(PORT, () => {
  console.log("Backend is Live on port", PORT);
});
