const express = require("express");
const fs = require("fs");

const { connectMongoDB } = require("./connection");
const { logReqRes } = require("./middlewares");
const userRouter = require("./routes/user");

const app = express();
const port = 8000;

//Connection
connectMongoDB("mongodb://127.0.0.1:27017/rest_api").then(() => console.log("MongoDB Connected"));

//Middleware
app.use(express.urlencoded({extended: false}));
app.use(logReqRes("log.txt"));

//Routes
app.use("/api/users", userRouter);
app.listen(port, () => {console.log(`server started at port: ${port}`)});