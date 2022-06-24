import React from 'react'
import * as fs from "fs";

export default async function contact(req,res) {
    if(req.method == "POST"){
        let dataf = JSON.parse(req.body)
        console.log(dataf);
        let data = await fs.promises.readdir("contactData");
        fs.writeFile(`contactData/file${data.length +1}.json`,JSON.stringify(dataf),()=>{})
        res.status(200).json({"done":"yes"});
    }
    else{
        res.status(200).json({"hi":"bye"});
    }

}
