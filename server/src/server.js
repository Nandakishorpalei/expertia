const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const companyController = require("./controller/companyController");
app.use("/companies",companyController);

const candidateController = require("./controller/candidateController");
app.use("/candidates", candidateController);

module.exports = app;
