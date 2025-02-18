const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true
    },
    location: {
    type: String,
    required: true
    },
    cuisine: {
        type: String,
        required: true,
        enum: ["Pakistani", "Chinese", "Continental", "Italian", "Mexican"]    
    },
    rating: {
        type: Number,
        required: true,
        min: [1, "Rating must be at least 1"],
        max: [5, "Rating must be at most 5"]
    },
 },{ timestamps: true }
);

module.exports = mongoose.model("Restaurant", RestaurantSchema);
