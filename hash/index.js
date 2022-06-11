import crypto from 'crypto'
import path from 'path'
import fs, { read, readFile } from 'fs'

export async function hash(pathFile){
  const hash = crypto.createHash('md5')
  const readFile = fs.createReadStream(path.join(global.currentPath,pathFile[1]))

  readFile.on('data',(text)=>{
    hash.update(text)
  })
  
  readFile.on('error',()=>{
    console.log('Operation failed');
  })
  
  readFile.on('end',()=>{
    console.log(hash.digest('hex'));
  })  
}