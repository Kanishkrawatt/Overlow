import React from 'react'
import * as fs from "fs"
// function post(req,res) {
//     let array = [];
//     fs.readdir("blogpost",(err,data)=>{
        
//         if(err){
//             res.status(500).send("error")
//         }
//         else{
//             data.forEach(async(v,i)=>{
//                 fs.readFile(`blogpost/${v}`,"utf-8",(err,data)=>{
//                     array.push(JSON.parse(data));
//                 })

//             })
//             setTimeout(()=>{res.status(200).json(array)},10);
//         }
//     })
    
// }


async function post (req,res){
    let data = await fs.promises.readdir("blogpost");
    let array = [];
    for(let i = 0;i<data.length;i++){
        let item = data[i];
        let file = await fs.promises.readFile(("blogpost/"+item),"utf-8");
        array.push(JSON.parse(file));
    }
    res.status(200).json(array);
}

export default post