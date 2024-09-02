import {SocialMedia} from "../Models/SocialMedia.js";

export const addsocialmedia = async (req, res) => {
    try {
        const { WhatsApp, email, facebook, instagram, twitter } = req.body;

        const socialMediaData = await SocialMedia.create({
            WhatsApp,
            email,
            facebook,
            instagram,
            twitter,
        });

        
        const savedSocialMedia = await socialMediaData.save();

        res.status(201).json({
            success: true,
            message: "Social media data added successfully",
            data: savedSocialMedia,
        });
    } catch (error) {
        console.error("Error adding social media data:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

/// get all social media link
export const getsocialmediaById = async (req, res) => {
    const id = req.params.id;
    let socialmedia = await SocialMedia.findById(id);
    if (!socialmedia) return res.json({ message: "User not Exist" });
    res.json({ socialmedia });
  };
  


//update SocialMedia Link

export const updatesocialmedia = async (req, res) => {
    const id = req.params.id;
    const { WhatsApp, email, facebook, instagram, twitter } = req.body;
    let socialmedia = await SocialMedia.findById(id);
    if (!socialmedia) return res.json({ message: "Invaild id" });
    (socialmedia.WhatsApp = WhatsApp),
      (socialmedia.email=email),
      (socialmedia.facebook = facebook);
      (socialmedia.instagram =instagram );
      (socialmedia.twitter=twitter );
      
    await socialmedia.save();
    res.json({ message: "Your socialmedia has been updated !...", socialmedia });
  };


  //Delete Social Media Link

  export const deletesocialmediae = async(req,res) => {
    const id = req.params.id;
   
    let socialmedia = await SocialMedia.findById(id);
    if(!socialmedia) return res.json({message:"ivaild Id"});
  
    await socialmedia.deleteOne();
    res.json({
      message:"Deleted"
    })
  
  };