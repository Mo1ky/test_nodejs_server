//Пример подключения встроенного модуля os, который нужен для отображения используемой ОС:
const os = require("os")
let res = os.platform()
console.log(res)
/*
Для создания своего модуля надо:
1) Создать файл js, в котором будут описан сам модуль
2) Импортировать модуль в нужный файл (Пример: const module_My_math = require('./module_My_math'))
*/

const module_My_math = require('./module_My_math')
let res1 = module_My_math.add(4, 5)
let res2 = module_My_math.minus(6, 10)

console.log(`Res1: ${res1}, Res2: ${res2}`)

