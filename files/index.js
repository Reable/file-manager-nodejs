import fs from 'fs'
import path from 'path'
import {readFile} from './readFile.js'
import {createFile} from './createFile.js'
import {renameFile} from './renameFile.js'
import {copyFile} from './copyFile.js'
import {moveFile} from './moveFile.js'
import {removeFile} from './removeFile.js'

export async function workWithFiles(command){

  switch(command[0]){

    case 'cat':
      readFile(command[1])
    break

    case 'add':
      createFile(command[1])
    break

    case 'rn':
      renameFile(command[1],command[2])
    break

    case 'cp':
      copyFile(command[1],command[2])
    break

    case 'mv':
      moveFile(command[1],command[2])
    break

    case 'rm':
      removeFile(command[1])
    break
  }

} 
