const express = require("express");
const Order = require("../models/order.models.js");
const auth = require("../middleware/auth.middlewares.js");
const router = express.Router();

router.post("/place", auth, async (req, res) => {
    const order = new Order({ ...req.body, user: req.user.id });
    await order.save();
    res.json({ message: "Order placed successfully" });
});

router.get("/", auth, async (req, res) => {
    const orders = await Order.find({ user: req.user.id }).populate("restaurant");
    res.json(orders);
});

module.exports = router;
