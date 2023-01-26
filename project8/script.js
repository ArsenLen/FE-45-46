'use strict' // строгий режим
/*
    Массив объектов - структура данных, которая позволяет хранить документы из 
    базы данных. 
    В noSQL базе данных есть коллекции, состоящие из документов.
    Каждый документ представляет из себя json-строку, которая
    в итоге приходит в виде объекта

    JSON-строка используется для передачи данных по интернету(HTTP)
    JSON не является частью языка JavaScript, но у него есть методы, которые позволяют
        конвертировать ее. 
    {
        "id" : 1,
        "name" : "Arsen",
        "age" : 24,
        "prof" : "Frontend Developer"
    }

    Объект 
    {
        id : 1,
        name : "Arsen",
        age : 24,
        prof: "Frontend"
    }

    Коллекция данных
    products : [
        {
            "id" : 1,
            "name" : "Iphone14"
        },
        {} - документ, единица данных из коллекции
    ]

    Массив объектов
    [
        {
            id : 1,
            name : "Iphone14"
        },
        {},
        {}
    ]
*/
// const numbers = [1, 2, 4, 5, 6]

const products = [
    {
        id: 1,
        name: "Iphone 14",
        price: 100000,
        category: "phone"
    },
    {
        id: 2,
        name: "Iphone 13",
        price: 90000,
        category: "mobile"
    },
    {
        id: 3,
        name: "Iphone 12",
        price: 80000,
        category: "phone"
    }
]
// console.log(products)

/* 
    // Вывести в консоль название продукта, у которого id = 2
    console.log(products[1].name)

    // Вывести в консоль название и цену продукта, у которого id = 3.
    console.log(products[2].name, products[2].price)
    // products[2].name, price - price is not defined

    // Вывести в консоль название в теге <h1><h1> // шаблонная строка - 
    console.log(`<h1>${products[1].name} ${products[1].price}</h1>`) // интерполяция

    // const name = "Arsen"
    // Вывести в консоли div, внутри которого в теге h1 отобразить название продукта, у которого id = 1,
    // и внутри того же div'а в теге <p> отобразить цену того же продукта
    console.log(`   <div>
                        <h1>${products[0].name}</h1>
                        <p>${products[0].price}</p>
                    </div>
                `)
*/

// В консоли отобразить название и цену каждого продукта, используя цикл for
/* 
    for(let i = 0; i < products.length; i++) {
        console.log(products[i].name, products[i].price)
    }
*/ 
/* 
// В консоли отобразить название и цену только тех продуктов, цена которых больше 85000
for(let i = 0; i < products.length; i++) {
    if(products[i].price > 85000) {
        console.log(products[i].name, products[i].price)
    }
}
*/
// В консоли отобразить название и цену только тех продуктов, категория которых "phone"
// сравнение строк
/*
for(let i = 0; i < products.length; i++) {
    if(products[i].category === "phone"); {
        console.log(products[i].name, products[i].price)
    }
}
*/

// В консоли вывести сумму всех товаров из массива products.
/*  
    let sum = 0
    for(let i = 0; i < products.length; i++) {
        sum = sum + products[i].price
    }
    console.log(sum)
*/
/*  [100000, 90000, 80000]
    products.length = 3
    1. sum = 0, i = 0, i < 3 === 0 < 3 - true, products[0].price + 0, sum = 100000 + 0, sum = 100000, i++
    2. sum = 100000, i = 1, 1 < 3 -true, products[1].price + 100000, sum = 90000 + 100000, sum =190000, i++
    3. sum = 190000, i = 2, 2 < 3 - true, products[2].price + 190000, sum = 80000 + 190000, sum = 270000, i++
    4. sum = 270000, i = 3, 3 < 3 - false, выходим из цикла
    В консоли отобразить sum = 270000
*/
/*
    if(products[i].name.incudes('Iphone')) {
        считаем только те товары, в названии которых есть Iphone
    }
    const numbers = [1, 2, 5, 10, 70]
    for(let i = 0; i < numbers.length; i++) {
        // отображаем каждый элемент массив
        console.log(numbers[i])
    }
*/

/*
    Функция - блок кода, состоящий из различных команд. 
        С помощью функции можно отделять повторяющиеся команды, для того, чтобы постоянно их не писать заново
        Позволяет избавиться от лишнего дублирования кода

    Есть несколько способов создания функции
    1. function declaration
    2. function expression
    3. arrow function

    function fnName(param) {
        // действия // набор дейстий // алгоритм действий
    }
    fnName - имя функции. обычно в имени функции присутсвует глагол - действие
    param - параметры функции, аргументы функции. значения от которых зависит выполнение функций

    Вызов функции
    Пока функция не вызвана - она не работает
    Для того чтобы вызвать функцию, нужно записать - fnName()
*/

/* 
function sum(a, b) {
    console.log(a + b)
}
sum(10, 20) // Вызов функции с аргументами 10 и 20 // 30
sum(50, 70) // Вызов функции с аргументами 50 и 70 // 120
*/ 
// 
/* 
function showNotification(text, color) {
    console.log(`
        <div class="${color}">
            <p class="notificatio-text">${text}</p>
        </div>
    `)
}

// Здесь мы хотим вызвать успешное уведомление
showNotification("Успешно", "green")


// Здесь произошла ошибка и я хочу вызвать увемоление об ошибке
showNotification("Ошибка", "red")
*/
/*
    arr.push()

    function push(elem) {
        // Добавляет elem в конец массива, на котором был вызван метод
    }

    function alert(text) {
        // Отображает всплывающее окно с текстом, который получили в аргументе
    }

    function pow(num1, num2) {
        // Возводит число num1 в степень num2
    }
*/

/* 
<div class="green">
      <p class="notificatio-text">Успешно</p>
</div>

<div class="red">
      <p class="notificatio-text">Ошибка</p>
</div>

<div class="red">
      <p class="notificatio-text">Ошибка</p>
</div>

<div class="red">
      <p class="notificatio-text">Ошибка</p>
</div>

<div class="red">
      <p class="notificatio-text">Ошибка</p>
</div>

<div class="red">
      <p class="notificatio-text">Ошибка</p>
</div>

<div class="red">
      <p class="notificatio-text">Ошибка</p>
</div>
*/

const links = [
    {
        name: "О нас",
        link : "/about.html"
    },
    {
        name: "Контакты",
        link : "/contacts.html"
    }
]
for(let i = 0; i < links.length; i++) {
    // Вызвать showLiTag("О нас")
    showLiTag(links[i].name, links[i].link)
}

function showLiTag(text, link) {
    // Создание тега li
    console.log(`<li>
        <a href="${link}">
        ${text}
        </a>
    </li>`)
}


/*
const products = [
    {
        id: 1,
        name: "Iphone 14",
        price: 100000,
        category: "phone"
    },
    {
        id: 2,
        name: "Iphone 13",
        price: 90000,
        category: "mobile"
    },
    {
        id: 3,
        name: "Iphone 12",
        price: 80000,
        category: "phone"
    }
]
 ДЗ. 0. Наполнить массив products подобными объектами, с разными значениями
    
 1. Есть массив объектов products. Вывести название и цену каждого товара в консоли со
    скидкой 10%
    2. Есть массив объектов products. Из этого массива добавить в новый пустой массив только те
        продукты:
            а)цена которых больше 88000; const moreThanPrice = [] нужно заполнить данный массив
            б) категория который "phone"; const categoryPhone = []

    3. Создать функцию, которая получает два числа в параметры и выводит в консоль бОльшее из них
        max(10, 20) // 20
        max(100, 5) // 100
    4. Написать функцию, которая запрашивает число у пользователя и отображает "ЧЕТ", если число четное
        и "НЕЧЕТ", если нечетное
    5. Написать функцию, которая получает два числа и возводит первое число в степень второго
        power(10, 2) // 100
        power(12, 2) // 144
        power(2, 5) // 32
*/