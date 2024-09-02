import express from "express";
import bodyParser from "express";
import mongoose from "mongoose";
import { User } from "./Models/User.js";
import cors from 'cors'

const app = express();

// parse json data
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
  })
);

mongoose
  .connect(
    "mongodb+srv://sumanmalakar2022:G7VwOsxTULrhE9SR@volcanus.tkilonf.mongodb.net/",
    {
      dbName: "AG_API",
    }
  )
  .then(() => console.log("MongoDB Connected...!"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  // console.log(req.body)
  res.json({ message: "We are building API end points" });
});

app.get("/heros", (req, res) => {
  const heros = [
    { id: 1, heroName: "Superman", },
    { id: 2, heroName: "Siderman", },
    { id: 3, heroName: "Batman", },
  ];

  res.json({ message: "This our heros endPoints", heros });
});

// post method
app.post("/register", async (req, res) => {
  // console.log(req.body)
  const { name, gmail, password } = req.body;
  try {
    let user = await User.create({ name, gmail, password });
    res.json({ message: "User register successfully..!", user });
  } catch (error) {
    res.json({ message: "Internal Server Error" });
  }
});

// getAll Users
app.get('/users',async (req,res)=>{
  try { 
    let users =  await User.find();
    res.json({message:"All Users..",users})
  } catch (error) {
    res.json({message:"Internal Server Error"})
  }
})

const port = 1000;
app.listen(port, () => console.log(`server is running on port ${port}...`));
