//Модуль для работы с файлами
const fs = require('fs')
 //Создание папки синхронно
//fs.mkdirSync('text-files')

//Создание папки и файла в ней асинхронно 
/*
fs.mkdir('text-files', () => {
    fs.writeFile('./text-files/some.txt', 'Hello', () =>{})
})
*/
//Удаление этой папки
fs.unlink('./text-files/some.txt', () => {
    fs.rmdir('text-files', () => {})
})