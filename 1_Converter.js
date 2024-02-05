let num = 5

console.log(`Variable: ${num}`) // пример корректного вывода данных в консоль

//Модуль для перевода любов валюты:
const CC = require('currency-converter-lt')

let currencyConverter = new CC({
    from: "USD",
    to: "RUB",
    amount: 100
})

currencyConverter.convert().then((response) => {
    console.log(`Result: ${response}`)
})