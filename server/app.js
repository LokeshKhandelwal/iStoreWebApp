import express from 'express';
import { config } from 'dotenv';
import { errorMiddleware } from './middlewares/error.js';
import cookieParser from 'cookie-parser';
import cors from "cors";


config({
   path: "./data/config.env",
});

export const app = express();

//Using middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
   credentials: true,
   methods: ["GET", "POST", "PUT", "DELETE"],
   origin: [process.env.FRONTEND_URL_1, process.env.FRONTEND_URL_2],
}));

app.get("/", (req, res, next) => {
   res.send("Working");
})

// Importing routers
import user from "./routes/user.js";
import product from "./routes/product.js";
import order from "./routes/order.js";

app.use("/api/v1/user", user);
app.use("/api/v1/product", product);
app.use("/api/v1/order", order);



// Using Error Middleware
app.use(errorMiddleware)