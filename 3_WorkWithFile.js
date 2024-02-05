//Модуль для работы с файлами
const fs = require('fs')
let result = fs.readFile('some.txt', 'utf-8', (err, data) => {
    fs.writeFile('some.txt', data + "\nSome text", (err, data) => {
        console.log("Всё сработало!")
    })
})

