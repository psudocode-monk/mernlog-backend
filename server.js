import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.config.js";
import router from "./routes/streak.routes.js";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "https://mernlog-frontend.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api", router);

app.use("/", (req, res) => res.send("Server is running"));

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
