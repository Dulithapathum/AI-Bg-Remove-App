import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
    const { token } = req.header;
    if (!token) {
      return res.Json({
        success: false,
        message: "Not Autherizsed Login Again",
      });
    }
    const token_decode = jwt.decode(token);
    req.body.clerkId = token_decode.clerkId;
    next();
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
export default authUser;
