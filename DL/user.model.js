const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createDate: {
    type: Date,
    default: Date.now,
  },

  isActive: {
    type: Boolean,
    default: true,
  },
  number: {
    type: String,
    unique: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  budget: [
    {
      title: { type: String },
      amount: { type: Number },
    },
  ],
  transactions: [
    {
      title: { type: String },
      amount: { type: Number },
      type: { type: String },
      date: Date,
    },
  ],
});

const userData = mongoose.model("user", userSchema);
module.exports = { userData };
