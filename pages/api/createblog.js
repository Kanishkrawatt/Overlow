import React from 'react'
import * as fs from "fs";

export default async function contact(req,res) {
    if(req.method == "POST"){
        let data = JSON.parse(req.body)
        // console.log(data);
        fs.writeFile(`blogpost/${data.slug}.json`,JSON.stringify(data),()=>{})
        res.status(200).json({"done":"yes"});
    }
    else{
        res.status(200).json({"hi":"bye"});
    }

}
