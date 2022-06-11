import path from 'path'
import fs from 'fs'

export function readFile(pathFile){
  const readFile = fs.createReadStream(path.join(global.currentPath,pathFile),{encoding:'utf-8'})
  readFile.on('data',(text)=>{
    console.log(text);
  })
  readFile.on('error',()=>{
    console.log('Operation failed');
  })
}