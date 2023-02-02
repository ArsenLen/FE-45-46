const main = document.querySelector('main')

// console.log(main.innerText) // строка
// console.log(main.innerHTML) // строка <h1>My Title</h1>

/* 
    main.innerHTML = main.innerHTML + '<h2>Hello</h2>'
    main.innerHTML += '<div><h3></h3><h2>Hello</h2></div>'
*/ 
/*
// Задача. В теге main отрисовать 5 тегов <p class="item-1">Hello World</p> <p class="item-2">Hello World</p>,
// используя цикл for, сохраняя содержимое(<h1>)
// при этом в значениях внутри тегов p должна быть информация из массива строк
const names = ['Arsen', 'Anna', 'Artem', 'Dmitry', 'Maria']
const names = [0, 1, 2, 3]
                [1, 2, 3,]
    for(let i = 0; i < names.length; i++) {
         main.innerHTML += `<p class="item-${i + 1}">${names[i]}</p>`
    }
 
// Переписать код выше, используя arr.forEach(function(item, idx) {})
// idx === index === i !== id
names.forEach(function(name, index) {
    main.innerHTML += `<p class="item-${index + 1}">${name}</p>`
})
*/
// <p class="item-1">Arsen</p>
//<p class="item-2">Anna</p>

// i = 0, 0 + 1 = 1 
// i = 1, 1 + 1 = 2
/*
const name = 'Arsen'
const fullname = `${name} Iusupov` // "name Iusupov" ==> "Arsen Iusupov"
*/ 

/*
1. i = 0, 0 < 5 - true, main.innerHTML =  <p>Hello World</p>    
                        main.innerHTML =  + <p>Hello World</p> -> <h1>My Title</h1> <p>Hello World</p>
2. i = 1, 1 < 5 - true, main.innerHTML = <h1>My Title</h1> <p>Hello World</p> + <p>Hello World</p> =>  <h1>My Title</h1> <p>Hello World</p>  <p>Hello World</p>
*/



/* innerHTML = "<p>Hello</p><p>Hello</p><p>Hello</p><p>Hello</p>" */

/* 
    let i = 0
    i = i + 2 // 2
    i += 2 // 4
    // i++ только при добавлении 1
*/
/*
    elem.innerText - свойство, которое получает или задает текстовое содержимое тега
    
    elem.innerHTML - свойство, которое получает или задает HTML содержимое тега в виде строки.
        когда хотим задать новый HTML, мы должны присвоить этому свойству html элемент в виде строки.
    Если передать неправильный тег, то тег не отрисуется
    main = {
        innerText: "My Title",
        innerHTML: "<h1>My Title</h1>"
    }

    main.innerHTML = "<h2>New Title</h2>"

    main = {
        innerText: "New Title",
        innerHTML: "<h2>New Title</h2>"
    }
*/

// работа API. Серверные запросы. 1. Работа с API, работа с fetch()
// использование GRID

const posts = [
    {
        id: 1,
        img: "https://placekitten.com/640/360",
        title: "Мой первый пост",
        descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quidem assumenda rem debitis animi facere."
    },
    {
        id: 2,
        img: "https://placekitten.com/540/360",
        title: "Мой второй пост",
        descr: "Второй пост о столицах стран всего мира",
        additional: []
    },
    {
        id: 3,
        img: "https://placekitten.com/640/380",
        title: "Мой третий пост",
        descr: "Достопримечательности крупных европеских городов"
    },
]
// Задача. Отобразить разметку, пример которой ниже, используя данные из массива posts
posts.forEach(function(post) {
    main.innerHTML += `
        <article class="item item-${post.id}">
            <h5 class="title">${post.title}</h5>
            <img src="${post.img}">
            <p class="descr">${post.descr}</p>
        </article>
    `
})
/*
    1. Находим main. querySelector()
    2. Перебираем массив. forEach.
    3. Для каждого элемента массива делаем действие main.innerHTML и передаем разметку, при этом
        в разметке в теге h5 будет свойство title, в img ссылка на картинку
        в p.descr свойство descr
*/
/*
    `<article class="item item-{i}">
            <h5 class="title">Title</h5>
            <img src="https://placekitten.com/640/360" alt="">
            <p class="descr">Description</p>
    </article>
    `
*/
// "10" + "hello" - 10hello
/* 
    name: "Arsen"
    surname: "Iusupov"
    `name surname`
    name + surname
*/
// JSX - html+JS. index.html + script.js === Main.jsx
// function Main() {
//     return (
//         <>
//             {
//                 posts.forEach(function() {
//                     <article class="item item-{i}">
//                         <h5 class="title">Title</h5>
//                         <img src="https://placekitten.com/640/360" alt="">
//                         <p class="descr">{post.additional.forEach(function(elem) {  })}</p>
//                     </article>
//                 })
//             }
//         </>
//     )
// }


/*
    ДЗ
    https://www.figma.com/file/c8FlmkTHbSRyPgCeLEGdBF/Untitled-(Copy)?node-id=1%3A2&t=hGooSJShadvJJX82-0

    Сверстать макет.
    Создать структуру данных
    products = [
        {
            id: 1,
            name: "Велосипед",
            price: 40000
        },
        {}
    ]
    Создайте 4 объекта в массиве, с name и price.
    Пройтись с помощью forEach по массиву products и возвратить разметку для каждого продукта.
        Отобразить карточки товаров из массива products
*/
