import fs from "fs"
import { buffer } from "stream/consumers";

function readFile() {
    const readFile = fs.createReadStream("./streamFile.txt", "utf-8");

    readFile.on("error", function error(){
        console.log("An error occur");
        
    })

    readFile.on("data", (buffer) => {
        console.log("Reading data from my File", buffer);
    })
}
readFile()