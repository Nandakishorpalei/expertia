const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const SelectedCandidate = require("../model/selectedCandidateResumeModel")

router.get("/", async (req, res) => {
  try {
    const selectedCandidates = await SelectedCandidate.find().lean().exec();

    return res.status(200).send(selectedCandidates); 
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.post( "/",async (req, res) => {
    try {
      const selectedCandidate = await SelectedCandidate.create(req.body);

      return res.status(201).send(selectedCandidate);

    } catch (e) {
      return res.status(500).send(e.message);
    }
  }
);

module.exports = router;
