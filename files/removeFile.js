import path from 'path'
import fs from 'fs'

export async function removeFile(pathFile){
  if(fs.existsSync(path.join(global.currentPath,pathFile))){
    fs.rm(path.join(global.currentPath,pathFile),(err)=>{
      if(err) return console.log('Operation failed');
      console.log(`Deleted file ${path.join(global.currentPath,pathFile)}`);
    })
  }else{
    console.log('Operation failed');
  }
}