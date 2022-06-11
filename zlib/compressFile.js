import fs from 'fs'
import path from 'path'
import zlib from 'zlib'

export async function compressFile(pathFile){
  
  if(fs.existsSync(path.join(global.currentPath,pathFile))){
    // Кастыли для фарматирования расширения исзодного файла в .gz
    const nameArchive = pathFile.split('/')
    const renameTxtOnGz = nameArchive[nameArchive.length -1].split('.')
    renameTxtOnGz.splice(1,1)
    renameTxtOnGz.push('br')
    nameArchive[nameArchive.length - 1] = renameTxtOnGz.join('.')

    const readFile = fs.createReadStream(path.join(global.currentPath,pathFile))
    const writeFile = fs.createWriteStream(path.join(global.currentPath,nameArchive.join('/')))
    const brotli = zlib.createBrotliCompress();

    // Pipe the read and write operations with brotli compression
    const compress = readFile.pipe(brotli).pipe(writeFile);

    compress.on('finish', () => {
      console.log(`File compress`);
    });

  }else{
    console.log('Operation failed');
  }
}