const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { createWallet } = require("../services/lnbitsService");

const registerUser = async (req, res) => {
  try {
    const { accountType, email, password } = req.body;

    // Check if user exists
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ msg: "Email already exists" });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create LNBits wallet
    const wallet = await createWallet(email.split("@")[0]);

    const newUser = await User.create({
      accountType,
      email,
      password: hashedPassword,
      wallet: {
        id: wallet.id,
        adminKey: wallet.adminkey,
        invoiceKey: wallet.inkey,
      },
    });

    res.status(201).json({ msg: "User registered", user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

module.exports = { registerUser };
