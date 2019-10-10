const mongoose = require("mongoose");

const DefaulterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  createt_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Defaulter", DefaulterSchema);
