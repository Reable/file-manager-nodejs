import fs from 'fs'
import path from 'path'

export async function copyFile(pathFile,newPath){
  if(pathFile,newPath){
    if(fs.existsSync(path.join(global.currentPath,pathFile))
      && fs.existsSync(path.join(global.currentPath,newPath))){
        const readFile = fs.createReadStream(path.join(global.currentPath,pathFile),{encoding:'utf-8'})
        const writeFile = fs.createWriteStream(path.join(global.currentPath,newPath,pathFile.split('/')[pathFile.split('/').length - 1]))
        readFile.pipe(writeFile)
      }else{
      console.log('Operation failed');
    }
  }else{
    console.log('Operation failed');
  }
}