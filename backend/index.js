import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from './routes/productRoutes.js'

dotenv.config();
const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb://localhost:27017/Storage",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);

app.get("/", (req, res) => {
  res.send("MY API");
});

app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});