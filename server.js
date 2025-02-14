require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Route imports
const authRoutes = require("./routes/auth.routes.js");
const authMiddleware = require("./middleware/auth.middlewares.js");
const restaurantRoutes = require("./routes/restaurant.routes.js");
const orderRoutes = require("./routes/order.routes.js");

// Middleware
app.use(express.json());
app.use(cors());

// Public routes (don't need authentication)
app.use("/api/auth", authRoutes);

// Protected routes (apply authentication middleware here)
app.use("/api/restaurants", authMiddleware, restaurantRoutes);
app.use("/api/orders", authMiddleware, orderRoutes);

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/fooddb", {
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// Test route
app.get("/", (req, res) => res.send("Food Delivery API is Running"));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
