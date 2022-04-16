const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const Candidate = require("../model/candidateModel");

router.get("/", async (req, res) => {
  try {
    const candidates = await Candidate.find().lean().exec();

    return res.status(200).send(candidates); 
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.post( "/",async (req, res) => {
    try {
      const candidate = await Candidate.create(req.body);

      return res.status(201).send(candidate);

    } catch (e) {
      return res.status(500).send(e.message);
    }
  }
);

module.exports = router;
