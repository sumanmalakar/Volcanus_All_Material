import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
  
import bodyParser from "express";
import cors from 'cors'
import { appointmentRouter } from "./router/appointmentRouter.js";
import profileRouter from "./router/profile.js";
import companyRouter from "./router/companyRoutes.js";
import SocailMediaRoute from "./router/socialmedia.js";
import { paymentRouter } from "./router/payment.js";
import servicesRouter from "./router/OurServicesRouter.js";
import UserRouter from "./router/userRouter.js";
 

const app = express();


app.use(bodyParser.json());

config({ path: ".env" });

app.use(
  cors({
    // origin: "http://localhost:5173",
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Profile route
app.use('/api/profiles', profileRouter);

//  company routes
app.use('/api/companies', companyRouter);


//payment  
app.use('/api/payments' , paymentRouter)

//Socail media 
app.use('/api', SocailMediaRoute)

//service Router 
app.use("/api/service",servicesRouter)  



// appontmentRouter
app.use("/api/appointment",appointmentRouter) 

// userRouter
app.use("/api",UserRouter); 

// DB Connection
mongoose
  .connect(process.env.MONGO_URL, {
    dbName: "V-Profile",
  })
  .then(() => console.log("MongoDB is Connected..!"));

// Server Setup
const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port ${port}`));    