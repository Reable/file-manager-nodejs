import fs from 'fs'
import path from 'path'
import readline from 'readline'

// К сожалению сделал это синхронно(

export async function workWithPath(command){
  switch(command[0]){
    // Перемещение м\у папками
    case 'cd':
      cd(command[1])
    break;
    // Просмотр содержимого директории
    case 'ls':
      ls()
    break;
    // Вернуться на папку назад
    case 'up':
      up()
    break;

  }
}

async function cd(newPath){
  if(newPath){
    if(fs.existsSync(path.join(global.currentPath,newPath))){
      global.oldPath = global.currentPath
      global.currentPath = path.join(global.oldPath,newPath)
    }else{
      console.log('file not found');
    }
  }
}

async function ls(){
  fs.readdir(global.currentPath,(err,files)=>{
    if(err) return console.log('Operation failed');
    console.log(files);
  })
}

async function up(){
  global.oldPath = global.currentPath
  global.currentPath = path.join(global.currentPath,'..')
}