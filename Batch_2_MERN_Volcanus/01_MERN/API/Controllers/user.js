import { User } from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, email, password,phone } = req.body;

  // Validate password
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

  // Check if user already exists
  let user = await User.findOne({ email });

  if (user) {
    return res.json({ message: "User already registered...", success: false });
  }
  // Validate phone number
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    return res.json({
      message: "Phone number must be a 10-digit number.",
      success: false,
    });
  }

  if (!passwordRegex.test(password)) {
    return res.json({
      message:
        "Password must be at least 8 characters long and include uppercase, lowercase, and special symbols.",
      success: false,
    });
  }
  // Hash password
  let hashPassword = await bcrypt.hash(password, 10);

  // Create user
  user = await User.create({ name, email, password: hashPassword,phone });
  res.json({
    message: "User registered successfully...!",
    success: true,
    user,
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });

  if (!user) return res.json({ message: "User not exist ...", success: false });

  let validPass = await bcrypt.compare(password, user.password);

  if (!validPass)
    return res.json({ message: "Invalid Credential", success: false });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SC, {
    expiresIn: "365d",
  });

  res.json({ message: `Welcome ${user.name}`, success: true, token });
};
