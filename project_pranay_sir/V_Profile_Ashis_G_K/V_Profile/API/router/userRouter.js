import express from "express";
import {
  register,
  login,
  getAllUser,
  getUserById,
  MyProfile,
  fileupload ,
  upload,
  UpdateUser,
  deleteImg
} from "../controllers/userController.js";
import { Authenticate } from "../middlewares/auth.js";
const UserRouter = express.Router();

UserRouter.get("/", (req, res) => {
  res.json({
    message: "this is home route",
  });
  console.log("this is home route");
});

UserRouter.post("/register", register);

UserRouter.post("/login", login);

UserRouter.get("/users", getAllUser);

UserRouter.get("/auth", Authenticate, (req, res) =>
  res.json({ message: "This s super man !...", user: req.user })
);

UserRouter.get("/user/:id", Authenticate, getUserById);

UserRouter.get("/user", Authenticate, MyProfile);
// UserRouter.get("/user",MyProfile);

// update user

UserRouter.put("/user/update/:id" ,Authenticate,UpdateUser)

// profile upload

UserRouter.post('/upload', Authenticate, upload.single('file') ,fileupload )

// delete profile

UserRouter.delete('/deleteimage', Authenticate, deleteImg)

export default UserRouter;
