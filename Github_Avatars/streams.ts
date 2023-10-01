import fs from "fs"
import path from "path"
setInterval(() => { 
const file = fs.createWriteStream("./streamFile.txt")
for (let i = 0; i < 500; i++) {
  file.write(`Welcome to set 08 class\n`)
}
}, 2000)