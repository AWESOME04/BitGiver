const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  accountType: {
    type: String,
    enum: ["personal account", "content creator", "charity", "organization"],
    default: "personal account",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  wallet: {
    id: String,
    adminKey: String,
    invoiceKey: String,
  },
});

module.exports = mongoose.model("User", userSchema);
