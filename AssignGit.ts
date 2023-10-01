import http, { IncomingMessage, ServerResponse } from "http"
import fs from "fs"
import path from "path"
import axios from "axios"
const port: number = 4000

interface iMassege {
    message: string
    success: boolean
    data: null | [] | {}[]
}
const server = http.createServer(async (req:IncomingMessage, res:ServerResponse<IncomingMessage>) => {
    res.setHeader("Content-Type", "Application/json")
    
    let response: iMassege = {
        message: "failed",
        success: true,
        data: null
    }
    let status = 404;

    let holder = "";

    req.on("data", (chunk) => {
        holder += (chunk)
    })
    .on("end", async () => {
        const {method, url} = req;
        if(method === "GET"){
            let details: any = url?.split("/")[1];
            let datavalue = parseInt(details)
    
            const Fakendpoint = await axios.get(
                "https://fakestoreapi.com/products"
            );
            if(Fakendpoint.status){
                let Getdata = Fakendpoint.data;
                let Get = Getdata.filter((el) => {
                    return el.id === datavalue
                })
                status = 200
           
                response.message = "All data gotten"
                response.data = Get
                response.success = true
                res.write(JSON.stringify({response, status}))
                res.end()
            
        }
        }
    })
})
server.listen(port, () => {
    console.log("server is up and running");
    
})