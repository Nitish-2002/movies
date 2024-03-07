import { Router } from "express";
import bcrypt from "bcrypt";
// import { JsonWebTokenError } from "jsonwebtoken";
import Jwt  from "jsonwebtoken";
import { getQuery,insertQuery,updateQuery} from "./config/queries.js";
import authroute from './auth.js';
import addauth from './middleware/addauth.js'
import express from 'express';
const app=express();
const route=Router();
const db=[];
// route.post("/register",async(req,res)=>{
//     const {body}=req;
//     console.log(body);
//     const existingUser=db.find((user)=>user.username===body.username);
//     if(existingUser){
//         return res.send(400).send({message:"user existes"});
//     }
//     const hashPassword=await bcrypt.hash(body.password,10);
//     console.log("pass",body.password);
//     console.log("hash",hashPassword)
//     const users={
//         username:body.username,
//         password:hashPassword,
//     };
//     db.push(users);
//     res.status(201).send({message:"creates successfull"})
// })

route.post("/register",async(req,res)=>{
    const {body}=req;
    console.log(body);
    const sql=`select * from demo_table where name='${body.username}'`;
    const data=await getQuery(sql);
    console.log(data,"as resolved it")
    let flag=true;
    if(data.rows && data.rows.length>=1){
        flag=false;
    }
    if(flag){
    const hashPassword=await bcrypt.hash(body.password,10);
    console.log("pass",body.password);
    console.log("hash",hashPassword)
    const users={
        username:body.username,
        password:hashPassword,
    };

    console.log("working")
    const insql=`insert into demo_table (name,class) values ($1,$2);`;
    const result=await insertQuery(insql,[body.username,hashPassword])
    res.status(201).send({message:"Account creation successfull Click on Login to Continue"})}
    else{
        res.send({message:"user Exists"})
    }
})





route.post("/users",async(req,res)=>{
    res.send({message:"accessible"})
})
// route.post("/login",async(req,res)=>{
//     console.log(db,"as database");
//     try{
//         const {username,password}=req.body;
//         console.log("try block")
//         if(!username && !password){
//             console.log("stopped");
//             return res.status(400).send({message:"enter password"})
//         }
//         const existingUser=db.find((users)=>users.username===req.body.username);
//         console.log(existingUser,"existed data")
//         if(existingUser && (await bcrypt.compare(password,existingUser.password)))
//         {
//             console.log("true");
//             // res.send({message:"DONE"})
//             // console.log(await bcrypt.genSalt(10));
//             const token=Jwt.sign(existingUser,"$2b$10$3ppubiq16Xlv6jIBHv/XPu",{
//                 algorithm:"HS256",
//             });
//             console.log(token);
//             db.map((user,index)=>{
//                 if(username==user.username){
//                     user.token=token;
//                 }
//             })
//             return res.status(201).send({data:db,message:"Login"});

//         }
//         return res.status(201).send({message:"unauthorisized"});
//     }
//     catch(error){
//             console.log("error");
//             return res.status(420).send({message:"error"});

//         }
//     }
// )



route.post("/login",async(req,res)=>{
    console.log(db,"as database");
    try{
        const {username,password}=req.body;
        if(!username && !password){
            console.log("stopped");
            return res.status(400).send({message:"enter Credentials"})
        }
        const sql=`select * from demo_table where name='${username}'`;
        const data=await getQuery(sql);
        let flag=false;
        console.log(data,"to compare password")
        if(data.rows && data.rows.length==1){
            flag=true;
            console.log("entered")
        }
        if(flag){
            console.log(data.rows.class,"paa")
        if((await bcrypt.compare(password,data.rows[0].class)))
        {
            console.log("true");
            console.log(data.rows[0],"as required to validate");
            const token=Jwt.sign(data.rows[0],"$2b$10$3ppubiq16Xlv6jIBHv/XPu",{
                algorithm:"HS256",
            });
            console.log(token);
            const sql = `update demo_table set token = $1 where name ='${username}'`;
            console.log("1");
            const result = await updateQuery(sql,[token]);
            console.log(result);
            console.log("2");
            return res.status(201).send({message:"Login successful",token_data:token});

        }}
        return res.status(201).send({message:"unauthorisized user"});
    }
    catch(error){
            console.log("error");
            return res.status(420).send({message:"Unable to Login now try Again"});

        }
    }
)




export default route;