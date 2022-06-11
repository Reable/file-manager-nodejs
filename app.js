import readline from 'readline'
import os from 'os'
import { CommandRoute } from './command/index.js'


// Создание глоб переменной
global.currentPath = os.homedir()

// Приветсвие
const userName = process.argv.splice(2)[0].split('=')[1]
console.log(`Welcome to the File Manager, ${userName}!`);


//Отработка интревейса readline
const rl = readline.createInterface({input : process.stdin , output : process.stdout})

rl.on('line', async(line)=>{
  
  // Выход из FS с помошью команды
  if(line === '.exit') {
    rl.close()
  }

  // Обработка команд пользователя
  // if(line){
    await CommandRoute(line)
    console.log(`You are currently in ${ global.currentPath }`)
  // }
})

rl.on('close', ()=>{
  console.log(`Thank you for using File Manager, ${userName}!`)
})