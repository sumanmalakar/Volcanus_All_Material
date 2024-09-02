import { SocialMedia } from "../Models/SocialMedia.js";

export const addsocialmedia = async (req, res) => {
  const {
    whatsApp,
    email,
    facebook,
    instagram,
    twitter,
    Skype,
    Discord,
    Linkdin,
    Website,
    location,
  } = req.body;

  const social = await SocialMedia.create({
    whatsApp,
    email,
    facebook,
    instagram,
    twitter,
    Skype,
    Discord,
    Linkdin,
    Website,
    location,
    user: req.user,
  });

  res.status(200).json({ message: "Social links uploaded..!", social });
};

/// get all social media link
export const getsocialmediaById = async (req, res) => {
  const id = req.params.id;
  let socialmedia = await SocialMedia.findById(id);
  if (!socialmedia) return res.json({ message: "User not Exist" });
  res.json({ socialmedia });
};

// get social media by userId
export const getSocialMedia = async (req, res) => {
  const userID = req.params.id;
  const media = await SocialMedia.find({ user: userID });
  res.json({ message: "Socail links", media });
};

//update SocialMedia Link

export const updatesocialmedia = async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  let socialmedia = await SocialMedia.findById(id);
  if (!socialmedia) return res.json({ message: "Invaild id" });
  const updateSocialmedia = await SocialMedia.findByIdAndUpdate(id,updateData,{new:true})
 // await socialmedia.save();
  res.json({
    message: "Your socialmedia has been updated !...",
    updateSocialmedia,
  });
};

//Delete Social Media Link

export const deletesocialmediae = async (req, res) => {
  const id = req.params.id;

  let socialmedia = await SocialMedia.findById(id);
  if (!socialmedia) return res.json({ message: "ivaild Id" });

  await socialmedia.deleteOne();
  res.json({
    message: "Deleted",
  });
};
