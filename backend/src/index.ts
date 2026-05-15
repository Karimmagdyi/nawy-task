import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import router from "./routes/main";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.get("/health", (req, res) => {
  res.json({ status: "okay" });
});
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

export default app;
