import http, { IncomingMessage, Server, ServerResponse } from "http";
import fs from "fs"
import path from "path";

const port: number = 4200

// const Dataset = [
//     {
//         id:"1",
//         name: "Habeeb",
//         stack: "Full stack"
//     },
//     {
//         id:"2",
//         name: "Khalid",
//         stack: "Pro-codes"
//     },
//     {
//         id: "3",
//         name: "Nzube",
//         stack: "Butcher"
//     }
// ]
const server = http.createServer((req:IncomingMessage, res:ServerResponse<IncomingMessage>) => {
   res.writeHead(200);
   
   if(req.url === "/" && req.method === "GET" && res.statusCode === 200) {
    // res.setHeader("Content-Type", "application/json");
    // res.write(JSON.stringify(Dataset))
    res.end()
   }
    res.end()

   let connect: string = "site/";

   switch (req.url) {
    case "/":
        connect += "home.html";
        res.statusCode = 200;
        break;
        case "/about":
            connect += "about.html";
            res.statusCode = 200;
            break;
            case "/contact":
            connect += "contact.html";
            res.statusCode = 200;
            break;
        default :
        connect += "404.html";
        res.statusCode = 200;
        break;
   }
   fs.readFile(path.join(__dirname, connect), (error,data) => {
    if (error) {
        console.log("an error occured", error);
        res.end()
    }else{
        res.write(data);
        res.end();
    }
   })
})
server.listen(port , () => {
    console.log("port is up and listening");
})