import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import UserModel from "../models/userModel.js";

const removeBgImage = async (req, res) => {
  try {
    const { clerkId } = req.user;

    const user = await UserModel.findOne({ clerkId });

    if (!user) {
      return res.json({ success: false, message: "User not Found" });
    }

    if (user.creditBalance === 0) {
      return res.json({
        success: false,
        message: "No credit Balance",
        creditBalance: user.creditBalance,
      });
    }
    const imagePath = req.file.path;
    const imageFile = fs.createReadStream(imagePath);

    const formData = new FormData();
    formData.append("image_file", imageFile);
    const { data } = await axios.post(
      "https://clipdrop-api.co/remove-background/v1",
      formData,
      {
        headers: { "x-api-key": process.env.CLIPDROP_API },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;

    await UserModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
      success: true,
      resultImage,
      creditBalance: user.creditBalance - 1,
      message: "Background Removed",
    });
  } catch (error) {
    console.error(" Error:", error.message);
    return res.json({ success: false, message: error.message });
  }
};

export { removeBgImage };
