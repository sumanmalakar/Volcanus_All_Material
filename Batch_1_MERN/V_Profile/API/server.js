import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import userRouter from "./router/user.js";
import { postRouter } from "./router/post.js";
import bodyParser from "express";
import cors from 'cors'
import {SocailMediaRoute} from "./router/socialmedia.js";
import {contactRoute} from "./router/contact.js";
import { appointmentRouter } from "./router/appointment.js";
import { galleryRouter } from "./router/gallery.js";

// import {servicesRoute} from "./router/services.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// creating config file
config({ path: ".env" });

app.use(bodyParser.json());

// userRouter
app.use("/api", userRouter);

// postRouter
app.use("/api", postRouter);

//socialMedia

app.use("/api",SocailMediaRoute)

// contactRoute
app.use("/api",contactRoute)

// galleryRoute
app.use("/api",galleryRouter)

// appontmentRouter

app.use("/api",appointmentRouter)



// DB Connection
mongoose
  .connect(process.env.MONGO_URL, {
    dbName: "Blogging_MERN_Volcanus",
  })
  .then(() => console.log("MongoDB is Connected..!"));

// Server Setup
const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port ${port}`));

