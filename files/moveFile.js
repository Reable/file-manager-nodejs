import path from 'path'
import fs from 'fs'

export async function moveFile(pathFile,newPath){
  if(pathFile,newPath){
    if(fs.existsSync(path.join(global.currentPath,pathFile))
      && fs.existsSync(path.join(global.currentPath,newPath))){
        const readFile = fs.createReadStream(path.join(global.currentPath,pathFile),{encoding:'utf-8'})
        const writeFile = fs.createWriteStream(path.join(global.currentPath,newPath,pathFile.split('/')[pathFile.split('/').length - 1]))
        readFile.pipe(writeFile)
        fs.rm(path.join(global.currentPath,pathFile),(err)=>{
          if(err) return console.log('Operation failed');
        })
      }else{
      console.log('Operation failed');
    }
  }else{
    console.log('Operation failed');
  }
}