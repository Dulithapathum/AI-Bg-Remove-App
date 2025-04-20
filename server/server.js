import "dotenv/config";

import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";
import userRouter from "./routes/userRoutes.js";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());
await connectDB();

app.get("/", (req, res) => {
  res.send("Work Correctly");
});

app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT} `);
});
