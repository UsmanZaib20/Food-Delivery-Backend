const express = require("express");
const Restaurant = require("../models/restaurant.models.js");
const auth = require("../middleware/auth.middlewares.js");
const router = express.Router();

router.post("/add", auth, async (req, res) => {
    if (req.user.role !== "admin") return res.status(403).json({ error: "Unauthorized" });

    const restaurant = new Restaurant(req.body);
    await restaurant.save();
    res.json({ message: "Restaurant added successfully" });
});

router.get("/", async (req, res) => {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
});

module.exports = router;
