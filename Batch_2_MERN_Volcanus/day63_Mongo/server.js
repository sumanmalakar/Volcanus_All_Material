import express from "express";
import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://sumanmalakar2022:5albIa4990YThPOg@cluster0.ddicszz.mongodb.net/",
    {
      dbName: "MERN_VOLCANUS_BATCH_2",
    }
  )
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log(err));

//

const app = express();

app.listen(1000, () => console.log("Server is running on port 1000"));
