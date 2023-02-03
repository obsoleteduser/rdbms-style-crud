import express from "express";
import dotenv from "dotenv";
import { connectToDb } from "./config/dbConfig.js";
import ordersRoute from "./routes/ordersRoute.js";
import addressRoute from "./routes/addressRoute.js";
import cors from 'cors'
dotenv.config();

const app = express();
app.use(express.json())
app.use(cors())
app.use("/api", ordersRoute);
app.use("/api", addressRoute)


const start = async () => {
  await connectToDb();
  app.listen(process.env.PORT, () => {
    console.log(`Server started on ${process.env.PORT}`);
  });
};

start();
