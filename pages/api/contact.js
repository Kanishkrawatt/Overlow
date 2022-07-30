

export default async function contact(req,res) {
    if(req.method == "POST"){
        let dataf = req.body;
        console.log(dataf);

        res.status(200).json({"done":"yes"});
    }
    else if(req.method === "GET"){
        res.status(200).json({"Hey":"br"});
        
    }
    else{
        res.status(200).json({"hi":"bye"});
    }

}
