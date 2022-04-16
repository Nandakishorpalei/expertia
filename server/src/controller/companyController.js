const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const Company = require("../model/companyModel")

router.get("/", async (req, res) => {
  try {
    const companies = await Company.find().lean().exec();

    return res.status(200).send(companies); 
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.post( "/",async (req, res) => {
    try {
      const company = await Company.create(req.body);

      return res.status(201).send(company);

    } catch (e) {
      return res.status(500).send(e.message);
    }
  }
);

module.exports = router;
