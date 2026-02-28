const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    category: String,
    stock: Number,
    ratings: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);