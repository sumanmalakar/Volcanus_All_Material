import { User } from "../Models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';

   // cloudinary Configuration
   cloudinary.config({ 
    cloud_name: 'db0hvarfh', 
    api_key: '856629464622132', 
    api_secret: 'D1v19ns23XqbJqOjRf5z2IBwzZQ' // Click 'View Credentials' below to copy your API secret
});

export const register = async (req, res) => {
  const { name, email, password, phone,address,discription } = req.body;
  
  console.log('Request Body:', req.body);



  try {

    let user = await User.findOne({ email });
    let userPhone = await User.findOne({ phone });
  
    if (user || userPhone) {
      // return res.status(404).json({ message: "User already exists!" });
      return res.json({ message: "User already exists!" ,success:false });
    }
    // console.log('Password before hashing:', password);

    const hashPassword = await bcrypt.hash(password, 10);

    // console.log('Password after hashing:', hashPassword);

    user = await User.create({ name, email, password: hashPassword, phone,address,discription });

    res.status(201).json({ message: "User registered successfully!", user ,success:true });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: "Internal server error during registration." });
  }
};



export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    
  let user = await User.findOne({ email });
  // console.log(user)

  // if (!user) return res.status(404).json({ message: "User not exist..!" });
  if(!user ) return res.json({ message: "User not exist..!",success:false });


  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) return res.json({ message: "wrong password.." ,success:false });

  const token = jwt.sign({ userId: user.id }, process.env.JWT, {
    expiresIn: "365d",
  });

  res.status(200).json({ message: `Welcome ${user.name}`, token,user ,success:true });
    
  } catch (error) {
    res.json({message:error.message})
  }

};

// get all user

export const getAllUser = async (req, res) => {
  const user = await User.find();
  if (!user) return res.json({ message: "No User Find! .. " });
  res.json({ user });
};


//get user by Id
export const getUserById = async(req,res)=>{
  const id =req.params.id
  let user = await User.findById(id)
  if(!user) return res.json({message:"User not Exist"});
  res.json({user});
}

export const MyProfile = async(req,res)=>{
  res.json({user:req.user});
}


// update user

export const UpdateUser = async(req,res)=>{
  const id = req.params.id
  const updateData =  req.body
  try {
    let user =await User.findById(id)
    if(!user) return res.json({message:"invalid user"})
    let updatedUser = await User.findByIdAndUpdate(id,updateData,{new:true})
  res.json({message:"user update successfully" ,updatedUser })
    
    
  } catch (error) {
    res.json({message:error.message})
  }
}


// image uplpad for profile

// Multer configuration
const storage = multer.diskStorage({});
 export const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Limit upload size to 5MB
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|pdf)$/)) {
      return cb(new Error('Only image and pdf files are allowed!'), false);
    }
    cb(null, true);
  }
});


export const fileupload = async (req, res) => {
  try {
    let  id = req.user._id
    const profile = await User.findById(id);
    if (!profile) {
      return res.json({ message: 'Profile not found' });
    }
     // Delete image from Cloudinary
     if (profile.public_id) {
      await cloudinary.uploader.destroy(profile.public_id);
    } 
    const result = await cloudinary.uploader.upload(req.file.path,{folder: 'v_profile_user_profile'});
  //  console.log(result);
   const imgurl = result.secure_url
    const updateProfile = await User.findByIdAndUpdate(id ,{imgurl ,public_id:result.public_id} ,{new:true} )
    res.json({ message:"profile picture added" ,url:result.secure_url });
  } catch (error) {
    console.error(error);
    res.json({message:error.message})
  }
}

// deleteimg

export const deleteImg=  async (req, res) => {
  const id = req.user._id
  try {

    // Retrieve profile from MongoDB
   
    const profile = await User.findById(id);

    if (!profile) {
      return res.json({ message: 'Profile not found' });
    }

    // Delete image from Cloudinary
    if (profile.public_id) {
      await cloudinary.uploader.destroy(profile.public_id);
    }

    // Update profile in MongoDB
    await User.findByIdAndUpdate(
     id,
     {public_id: "", imgurl: "" } ,
      { new: true }
    );

    return res.json({ message: 'Profile image deleted successfully' });
  } catch (error) {
    console.error('Error deleting profile image:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}