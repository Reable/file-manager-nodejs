
import { compressFile } from './compressFile.js';
import { decompressFile } from './decompresыFile.js';

export async function workWithZlib(command){
  switch(command[0]){
    
    case 'compress':
      compressFile(command[1])
    break

    case 'decompress':
      decompressFile(command[1])
    break

  }
}