import fs from "fs"
import http, { IncomingMessage, ServerResponse } from "http"
import path from "path"

const port: number = 1000

// fs.mkdir(" ../../Newclass", (error):void => {
//     if(error){
//         console.log("an error in creating folder", error)
//     }else{
//         console.log("folder created successfully")
//     }
// })

// const newMg = "Help me buy food"
// fs.writeFile(path.join(__dirname, "../Newclass" , "Oldfile.txt"),newMg, (error):void => {
//     if(error){
//         console.log("Error writing a file", error);
//     }else{
//         console.log("Newfile Added")
//     }
// })
// fs.mkdir("../Practice",(error):void => {
//    if(error){
//     console.log("error")
//    }else{
//     console.log("successful")
//    }
// })

// setInterval(() => {     
//     let write = "i am praticing"
// fs.writeFile(path.join(__dirname,"../Practice/", "Congratr.txt"), write, (error):void => {
//     if(error){
//         console.log("error occur")
//     }else{
//         console.log("nice one")
//     }
// })
// }, 5000)

//     setInterval (() => {
//     const newMg2: string [] = [
//                    "\nBuy snacks from Joan",
//                    "\nHelp me to code",
//                    "\nHelp me to flog them",
//                    "\nHelp me to cook",
//                    "\nEat your food",
//                    "\nBook of life",
//                    "\nNoun is a name of a person"
//     ]
//     let rand = Math.floor(Math.random() * newMg2.length)
//     let u = 0;
//     let quote = newMg2[rand]
//     fs.appendFile(path.join(__dirname, "../Newclass", "Oldfile.txt"),quote,
//     (error):void => {
//         if(error){
//             console.log("an error in appending file", error);
//         }else{
//             console.log("new file Appended");
            
//         }
//     }
//     )
//     console.log(quote)
// }, 5000)



// setInterval(() => {
// const newMg2 = "\nHelp me buy food"
// fs.appendFile(path.join(__dirname, "../Newclass" , "Oldfile.txt"),newMg2, (error):void => {
//     if(error){
//         console.log("Error writing a file", error);
//     }else{
//         console.log("Newfile Added")
//     }
// })
//    console.log(newMg2)
//     }, 5000);

fs.readFile(path.join(__dirname, "../Newclass", "Oldfile.txt"),"utf-8",(error,data) => {
    if(error){
        console.log("error")
    }
    else{
        console.log(data);
        
    }
})


let Dataset = [
    {
        id: "1",
        name: "habeeb"
    }
] 
const server = http.createServer((req:IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    res.writeHead(200)
   
    if(req.url === "/" && req.method === "GET" && res.statusCode === 200){
        res.setHeader("Content-Type", "application/json")
        res.write(JSON.stringify(Dataset))
        res.end()
    }
})
server.listen(port, () => {
    console.log("server is up and running");
    
})