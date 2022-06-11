import path from 'path'
import fs from 'fs'

export async function createFile(nameFile){

  if(!fs.existsSync(path.join(global.currentPath,nameFile))){
    fs.createWriteStream(path.join(global.currentPath,nameFile))
    console.log(`File ${nameFile} created`);
  }else{
    console.log('File exists');
  }

}