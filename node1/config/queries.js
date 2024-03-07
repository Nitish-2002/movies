import POOL from "pg";
const {Pool}=POOL;
const pool=new Pool({
host:"localhost",
port:5432,
user:"postgres",
password:"postgres",
database:"movies"
})
pool.connect((err)=>{
    if(err) throw err;
    console.log("database created");
});


export const getQuery=(query)=>{
     return new Promise((resolve,reject)=>{
        pool.query(query,(error,result)=>{
            if(error) reject(error);
            resolve(result);

        })
     })
}

export const insertQuery=(query,data)=>{
    return new Promise((resolve,reject)=>{
       pool.query(query,data,(error,result)=>{
           if(error) reject(error);
           resolve(result);
       })
    })
}


export const updateQuery=(query,data)=>{
    console.log("22");
    return new Promise((resolve,reject)=>{
       pool.query(query,data,(error,result)=>{
           if(error) reject(error);
           resolve(result);
       })
    })
}

export const deleteQuery=(query,data)=>{
    return new Promise((resolve,reject)=>{
        pool.query(query,data,(error,result)=>{
            if(error)   reject(error)
            resolve(result)
        })
    })
}