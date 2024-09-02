import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.urlencoded({ extended: true }));

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
});

const User = mongoose.model("User", userSchema);

//home
app.get("/", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  // console.log(req.body)
  let user = await User.create(req.body);
  console.log(user);
  res.redirect("/login");
});

// login
app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("user email = ", email, " user password = ", password);
  let user = await User.findOne({ email });

  if (!user) return res.json({ message: "User not exist" });

  if (user.password != password)
    return res.json({ message: "Invalide credentials" });

  res.render("welcome.ejs", { user });
});

// welcome
app.get("/welcome", (req, res) => {
  res.render("welcome.ejs");
});

mongoose
  .connect(
    "mongodb+srv://sumanmalakar2022:5albIa4990YThPOg@cluster0.ddicszz.mongodb.net/",
    {
      dbName: "MERN_Volcanus_Batch_2",
    }
  )
  .then(() => console.log("MongoDB Successfully...!"))
  .catch((err) => console.log(err));

app.listen(1000, () => console.log("Server is running on port 1000"));
