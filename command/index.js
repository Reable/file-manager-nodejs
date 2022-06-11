import path from 'path'
import fs from 'fs'
import { workWithPath} from '../path/index.js'
import { workWithFiles} from '../files/index.js'
import { workWithOs } from '../os/index.js'
import { hash } from '../hash/index.js'
import { workWithZlib } from '../zlib/index.js'

export async function CommandRoute(action){
  
  // Получение команды пользователя 
  const command = action.split(' ')

  switch(command[0]){
    // Перемещение м\у папками
    case 'cd':
    case 'ls':
    case "up":
      workWithPath(command)
    break;

    // Работа с файлами
    case 'cat':
    case 'add':
    case 'rn':
    case 'cp':
    case 'mv':
    case 'rm':
      workWithFiles(command)
    break
    
    case 'os':
      workWithOs(command)
    break

    case 'hash':
      hash(command)
    break

    case 'compress':
    case 'decompress':
      workWithZlib(command)
    break

    default:
      console.log('Invalid input');
    break
  }
  }