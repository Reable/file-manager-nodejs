import fs from 'fs'
import path from 'path'
import zlib from 'zlib'

export async function decompressFile(pathFile){
  if(fs.existsSync(path.join(global.currentPath,pathFile))){
    const nameArchive = pathFile.split('/')
    const renameTxtOnGz = nameArchive[nameArchive.length -1].split('.')
    renameTxtOnGz.splice(1,1)
    renameTxtOnGz.push('txt')
    nameArchive[nameArchive.length - 1] = renameTxtOnGz.join('.')
  
    const readFile = fs.createReadStream(path.join(global.currentPath,pathFile))
    const writeFile = fs.createWriteStream(path.join(global.currentPath,nameArchive.join('/')))
    const brotli = zlib.createBrotliDecompress()
    
    readFile.on('error',()=>{
      console.log('Operation failed');
    })
  
    const decompress = readFile.pipe(brotli).pipe(writeFile)
    
    decompress.on('finish',()=>{
      console.log(`File decompress`);
    })
  }else{
    console.log('Operation failed');
  }
}