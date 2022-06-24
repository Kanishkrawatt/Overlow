import React from 'react'
import * as fs from "fs"
function postdata(req,res) {
    fs.readFile(`blogpost/${req.query.slug}.json`,"utf-8",(err,data)=>{
        if(err){
            res.status(500).send("error")
        }
        else{
            res.status(200).json(JSON.parse(data));
        }
    })

}

export default postdata