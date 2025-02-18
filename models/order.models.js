const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
    },
    restaurant: {
         type: mongoose.Schema.Types.ObjectId, 
         ref: "Restaurant" 
        },
    items: [
        {name: String, quantity: Number }
    ],
    totalAmount:{ 
        type: Number,
        required: true
    },
    status: { 
        type: String, 
        enum: ["Pending", "Completed"], 
        default: "Pending" 
    }

}, { timestamps: true}
);

module.exports = mongoose.model("Order", OrderSchema);
