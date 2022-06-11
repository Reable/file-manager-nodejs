import path from 'path'
import fs from 'fs'

export async function renameFile(pathFile,newFileName){
  if(pathFile,newFileName){
    if(fs.existsSync(path.join(global.currentPath,pathFile))){
      // Сделал хорошую работу с путями(хотя это явно не самый крутой ее вариант)
      const sourceFile = path.join(global.currentPath,pathFile).split('\\')
      sourceFile[sourceFile.length - 1] = newFileName

      fs.promises.rename(path.join(global.currentPath,pathFile),sourceFile.join('/'))
    }else{
      console.log('Operation failed');
    }
  }else{
    console.log('Operation failed');
  }
}