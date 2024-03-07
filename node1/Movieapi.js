import { Router } from "express";
import { getQuery ,insertQuery,updateQuery,deleteQuery} from "./config/queries.js";
import sharp from "sharp";
const movierouter=Router()

movierouter.get("/getall",async (req,res)=>{
    try{
    const { body } = req;
    // console.log(body);
const sql=`select * from movie_data`
const data=await getQuery(sql)
return res.status(200).send({data:data.rows})}
catch{
    return res.status(200).send({message:"invalid"})}
})

movierouter.get("/getmoviebyid/:id",async (req,res)=>{
    try{
    const { params,body } = req;
    // console.log(body);
const sql=`select * from movie_data where movie_id=${params.id}`
const data=await getQuery(sql)
return res.status(200).send({data:data.rows})
    }
    catch{
        return res.status(200).send({message:"invalid"})}
    
})



movierouter.post("/createmovie",async (req,res)=>{
    try{
    const { body } = req;
    const {movie_id,movie_name,movie_description,movie_poster,movie_actor,movie_date}=body
    if(!movie_id || !movie_name || !movie_description||!movie_poster||!movie_actor||!movie_date){
        res.send({message:"enter the all fields"})
    }
    else{
     console.log(body);
      const base64Data = movie_poster
    //   console.log(base64Data)
      const fileName = Date.now()+'.png';
      const filePath = `public/${fileName}`;
//       try{
//       const buffer = Buffer.from(base64Data, 'base64');
//       sharp(buffer)
//         .toFile(filePath)
//         .then(info => {
//  //   console.log('Image saved at:', filePath);
//         })}
//         catch{
//             res.send({message:"unsupported format"})
//         }
    const inssql=`insert into movie_data (movie_id,movie_name,movie_description,movie_poster,movie_actor,movie_date)values ($1,$2,$3,$4,$5,$6)`

    const result=await insertQuery(inssql,[movie_id,movie_name,movie_description,
        // `http://192.168.220.178:8089/images/${fileName}`
        movie_poster
        ,movie_actor,movie_date])
    return res.status(200).send({message:"Movie Created Successfully"})
    }}
    catch(err){
    console.error('Error saving image:', err);
    return res.send({Error:"internal error"})
  } 
}
);

movierouter.delete("/deletemovie/:id",async (req,res)=>{
    try{
    const { params,body } = req;
     console.log(body);
     console.log(params)
const sql=`delete from movie_data where movie_id='${params.id}'`
const data=await getQuery(sql)
return res.status(200).send({message:"Deleted Successfully"})
    }
    catch{
        return res.status(200).send({message:"invalid"})
    }
})


movierouter.put("/updatemovie",async (req,res)=>{
    try{
    const { body } = req;
    const {movie_id,movie_name,movie_description,movie_poster,movie_actor,movie_date}=body
    const updsql = `update movie_data set movie_name= $1,movie_description=$2,movie_poster= $3,movie_actor= $4,movie_date =$5 where movie_id = '${movie_id}'`;

        const result = await updateQuery(updsql, [movie_name,movie_description,movie_poster,movie_actor,movie_date]);
        // const updateddata=await getquery(sql)
        return res.status(200).send({message:"Updated succesfully"})}
        catch{
            return res.status(200).send({message:"invalid"})
        }
})

export default movierouter