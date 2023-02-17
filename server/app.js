import express from 'express';
import { config } from 'dotenv';
import { errorMiddleware } from './middlewares/error.js';


config({
   path: "./data/config.env",
});

export const app = express();

//Using middlewares
app.use(express.json());


app.get("/", (req, res, next) => {
   res.send("Working");
})

// Importing routers
import user from "./routes/user.js";

app.use("/api/v1/user", user);



// Using Error Middleware
app.use(errorMiddleware)