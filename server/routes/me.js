const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json(req.user);
  } catch (error) {
    res.status(500).json({ message: "Internal error", error });
  }
});

module.exports = router;
