const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");
const userService = require("../services/UserService");

// /auth/register
router.post("/register", async (req, res) => {
  try {
    const { email, password, rememberMe } = req.body.loginData;

    const candidate = await userService.getMe(email);
    if (candidate) {
      return res.status(406).json({ message: "User exists" });
    }
    userService.createUser(email, password);

    await generateToken(res, email, rememberMe);
    res.status(201).json({ message: "Success" });
  } catch (e) {
    res.status(500).json({ message: "Registration error", error: e });
  }
});

// /auth/login
router.post("/login", async (req, res) => {
  try {
    const { email, password, rememberMe } = req.body.loginData;

    const message = await userService.login(email, password);
    if (message) return res.status(400).json({ message });

    await generateToken(res, email, rememberMe);
    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(500).json({ message: "Internal error", error });
  }
});
// /auth/logout
router.post("/logout", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userService.getMe(email);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    await generateToken(res, email, false, true);
    res.send();
  } catch (e) {
    res.status(500).json({ message: "Internal error" });
  }
});

module.exports = router;
