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
        if(method === "GET" && url === "/getfile"){
            const Fakendpoint = await axios.get(
                "https://fakestoreapi.com/products"
            );
                let userdetails = Fakendpoint.data
                // const useravatar = userdetails.avatar_url;
                const avatarfilename = `${Fakendpoint}`;
                const avatarfolder = path.join(
                  __dirname,
                  "Textfile",
                  avatarfilename
                );
                let Gettext = userdetails.map((el) => {
                    return el === avatarfolder
                })
                if(Gettext === true){
                    response.message = "text added"
                }else{
                    response.message= "text added failed" 
                }
                }
                status = 200;
                res.write(JSON.stringify({ status, response }));
                res.end();
        })
        
    })
server.listen(port, () => {
    console.log("server is up and running");  
})