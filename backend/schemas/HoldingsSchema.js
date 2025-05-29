// ✅ HoldingsSchema.js
const mongoose = require("mongoose");

const HoldingsSchema = new mongoose.Schema({
  stockName: String,
  quantity: Number,
  avgPrice: Number,
});

module.exports = HoldingsSchema;  // 👈 Export directly
