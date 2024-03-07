import express from 'express';
import statusCodes from 'status-codes';
import upload from './upLoad.js';
import addt from './middleware/addFaceId.js';
// const express=require('express');



const route=express.Router();
const data=[{id:1,name:"one"},{id:2,name:"two"},{id:3,name:"three"},{id:4,name:"four"}]


route.get('/',(req,res)=>{
    console.log(req.headers)
    console.log(req.headers.traceId)
    res.send({"data":"this is get "})})




route.get('/getusers',(req,res)=>(res.send({"data":data})))






route.post('/postusers/:id',(req,res)=>{
     const {params,query}=req;
    if(!query.name){
        res.status(404);
        throw new Error("ALL ARE MANDATORY")
    }
    console.log(req,"requeat");
    console.log(req.body,"as request");
    console.log(params,"as params");
    console.log(query,"as query");
    console.log(query.name,"as query name");
    res.send({"data":"this is post command"})})


    route.post('/:id',(req,res)=>{
        const {params,query}=req;
        data.map((item)=>(item.id)==req.params.id?console.log(item.id,item.name):null)
        res.send({"data":"this is post with ids"})
        console.log(data)}
        )



route.put('/putusers',(req,res)=>(res.send({"data":"this is put"})))


route.put('/:id',(req,res)=>{
    data.map((item)=>(item.id)==req.params.id?item.name="uday":null)
    res.send({"data":"this is put with ids"})
    console.log(data);
})


route.delete('/deleteusers',(req,res)=>(res.send({"data":"this is delete"})))


// module.exports= route;
route.delete('/:id',(req,res)=>{
    data.map((item,index)=>(item.id)==req.params.id?data.splice(1,index):null)
    res.send({"data":"this is delete with ids"})
    console.log(data);
})


route.post('/upload',upload.single("file"),(req,res)=>{res.send({"message":"file uploaded"})})
export default route;