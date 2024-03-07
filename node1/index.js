// const express=require('express')
import express from 'express';
import route from './routes.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import errorHandler from './errorHandler.js';
import statusCodes from 'status-codes';
import addt from './middleware/addFaceId.js';
// const route=require('./routes')
import authroute from './auth.js';
import addauth from './middleware/addauth.js'
import cors from "cors";
import movierouter from './movieapi.js';
import { join } from 'path'
dotenv.config();
// const PORT=process.env.PORT|| 8080;
const app=express();
// app.use(addt)
// const path = require('path')
// app.use('/static', express.static(join(__dirname, 'public')))
app.use(bodyParser.json())
app.use('/images',express.static('public'));

 
app.use(cors({
    methods : ['GET','POST','PUT','DELETE']
}))
// // app.use('/virat',route)
// app.use("/",authroute);
// // app.use(addauth);
// app.use("/user",authroute);
// app.use(errorHandler)
// app.use("/",(req,res)=>{res.status(404).send({message:"Route not found"})});
// //   NEED TO DO
// // app.listen(PORT,()=>(console.log("uday")))
app.use("/",movierouter)
app.use("/",(req,res)=>{res.status(404).send({message:"Route not found"})});
app.listen(8089,()=>(console.log("uday")))




