// Обращаемся к body
// console.log(document.body)

// Изменить заголовок(title) страницы
// document.title = "DOM элементы"
/*
    Когда мы хотим обратиться к определенному тегу в dom-дереве,
    нужно использовать метод querySelector. 
    querySelector - метод навигации(поиска) элемента в DOM
    Метод используется и вызывается на теге document чаще всего, но он
        может вызваться и на любом другом теге. 
    Позволяет найти любой элемент по селектору. 
    Селектор:
        1. .className
        2. #id
        3. tagName
        4. [attribute] [type="text"]
    Принимает параметр - селектор в виде строки
    
    querySelector() - возвращает только первый найденный элемент в DOM

    Метод querySelector вернет ошибку, если ничего не передать внутрь как параметр
     document.querySelector()
     document.querySelector() возвращает null, если такой тег не был найден

    Если хотим найти несколько элементов по определенному селектору, то используем метод
        querySelectorAll() - найти все элементы по селектору
        он возвращает NodeList - список узлов, это структура данных, которая хранит несколько DOM-элементов
        

    Есть устаревшие методы поиска в DOM.
        1. getElementById()
        2. getElementsByClass()
        3. getElementsByTagName()

     Метод - функция в объекте. 
     
        
     // console.log(document.querySelector('button'))
    // console.log(document.querySelector('h1'))
*/

/*
    const obj = {}
    const arr = [10, 20, 30, 40]
    console.log(arr[2]) // 30
*/
/* 
    // Селектор по тегу
    const redButton = document.querySelector('button')
    console.log(redButton)
    // Селектор по классу 
    const redButtonClass = document.querySelector('.red')
    console.log(redButtonClass)
    // Селектор по id
    const redButtonId = document.querySelector('#red')
    console.log(redButtonId)

    // найти все теги по селектору button
    const buttons = document.querySelectorAll('button')
    console.log(buttons)
    // получаем определенный элемент из nodeList
    const greenButton = buttons[1]
    console.log(greenButton)

    .length - длина NodeList длина массива - количество элементов
*/ 

/* 
// Задача. 
    // В переменную titles - положить все заголовки
    // В переменную descrSecond - положить все теги p из второго section
    // В переменную firstDescr - положить тег с id first-descr 
    // В переменную sections - положить оба section
    const main = document.querySelector('main')
    const secondSection = document.querySelector('.item-2')

    const titles = main.querySelectorAll('h2')
    console.log(titles)

    const descrSecond = main.querySelectorAll('.item-2 p')
    console.log(descrSecond)

    const firstDescr = document.querySelector('#first-descr') // id - уникальный идентификатор
    console.log(firstDescr)

    const sections = document.querySelectorAll('section')
    console.log(sections)
*/

/* 
    // Задача. 
    // В переменную links - положить все теги a
    // В переменную myLinks - положить все теги a с классом .my-link
    // В переменную secondLink - положить тег с id second-link

    const links = document.querySelectorAll('a')
    console.log(links)

    const myLinks = document.querySelectorAll('.my-link')

    const secondLink = document.querySelector('#second-link')
*/

/* 
    // Задача. Найти тег main и отобразить в консоли
    // const main = document.querySelector('main .red')
    // const innerButton = main.querySelector('button')
    // console.log(main)
*/

// Комбинированные селекторы
/*
    querySelector('main .red') // находим элемент с классом .red внутри main
    main .red {

    }
    
    <section class="item-2">
        <p class="text blue"></p>
        <div> 
            <p class="text blue"></p>
            <p class="text"></p>
            <p class="elem blue"></p>
        </div>
    </section>
    Хотим найти элемент у которого есть и класс text и класс blue
    querySelector('.text.blue')

    Хотим найти все теги с классом text внутри section с классом item-2
    querySelector('.item-2 .text.blue')

    Хотим найти теги h2 и h2
    querySelectorAll('h2, h3')
*/

/* 
    // Задача. Изменить текст внутри p с #first-descr на Привет
    const firstDescr = document.querySelector('#first-descr')
    // console.log(firstDescr.innerText) получили текстовое содержимое тега
    firstDescr.innerText = "Привет"

    // Задача. у элемента с id second-link изменить текстовое содержимое на "Ссылка"
    const secondLink = document.querySelector("#second-link")
    secondLink.innerText = "Ссылка"
*/

/* 
    // Во всех тегах p поменять текст на "Привет, Мир"
    const descriptions = document.querySelectorAll('p')
    // console.log(descriptions)

        descriptions[0].innerText = "Привет, Мир"
        descriptions[1].innerText = "Привет, Мир"
        descriptions[2].innerText = "Привет, Мир"

    for(let i = 0; i < descriptions.length; i++) {
        // console.log(descriptions[i].innerText)
        descriptions[i].innerText = "Привет, Мир"
    }
*/

// Задача. Поменять текст во всех тегах a на "Ссылка"
/* 
    let links = document.querySelectorAll('a')
    for(let i = 0; i < links.length; i++) {
        links[i].innerText = "Ссылка"
    }
*/

/* 
// Есть массив links, в котором хранится список названий ссылок. Заполнить каждый из тегов a, соответсвующими
// по индексам ссылками из массива links. 

// links.length = 4
// htmlLinks.length = 4
const links = ["Google", "Facebook", "Instagram"]
const htmlLinks = document.querySelectorAll('a')
// console.log(htmlLinks.length) 
for(let i = 0; i < links.length; i++) {
    // console.log(links[i])
    // console.log(htmlLinks[i])
    htmlLinks[i].innerText = links[i]
}
// arr = [{}, {}, {}]. arr[3].innerText - undefined
/*
    4. i = 3, 3 < 4 - true, links[3] - LinkedIn, htmlLinks[3].innerText = links[3]
    cannot set properties of undefined
*/
/* 
    // htmlLinks = [{ innerText: "Link" }, {innerText: "Hello"}]
    // links = ["Google", "Facebook", "Instagram", "LinkedIn"]
    // htmlLinks[0].innerText = links[0]
    // htmlLinks[1].innerText = links[1]

/* 
    console.log(links[0]) // первый элемент из массива links
    console.log(htmlLinks[0]) // первый элемент из массива htmlLinks

    console.log(links[1]) // второй элемент из массива links
    console.log(htmlLinks[1]) // второй элемент из массива htmlLinks


/* 
    htmlLinks[0] // первый тег <a></a> 
    links[0] // первый текст для первого тега a "Google"

    htmlLinks[0].innerText = links[0]
    htmlLinks[1].innerText = links[1]
    htmlLinks[2].innerText = links[2]


// console.log(links[0])
// console.log(htmlLinks[0])

// console.log(links[1])
// console.log(htmlLinks[1])

        i = 0, i < links.length, links.length = 4

    1. i = 0, 0 < 4 - true, console.log(links[0], htmlLinks[0]), i++
    2. i = 1, 1 < 4 - true, console.log(links[1], htmlLinks[1]), i++
    3. i = 2, 2 < 4 - true, console.log(links[2], htmlLinks[2]), i++
    4. i = 3, 3 < 4 - true, console.log(links[3], htmlLinks[3]), i++
    5. вышли из цикла
*/


// for(let i = 0; i < htmlLinks.length; i++) {
//     console.log(htmlLinks[i]) 
// }

/*
    let arrayOfObj = [
        {
            name: "Iphone 14"
        }
    ]
*/
/*
    1. Отобразить все ссылки в консоли
    2. Отобразить все теги a в консоли
    3. Каждому тегу a добавить свой текст. Сначала пробежаться по массиву links
        и каждому элементу из массива htmlLinks добавить соотв-ю по индексу ссылку 
    
    В обоих циклах одинаковое количество итераций, следовательно можно объединить их в один цикл.
        После того, как объединили, можно выполнить измнение текста в тегах a
*/


// Есть массив texts ["Привет", "Привет, мир", "ПриветПривет"]
// Добавить строки из массива texts в соотв-е по индексу теги p

/* 
    NodeList = [
        {},
        {},
        {}
    ]

    NodeList to Array
    [...links, "hello"]
    Array.from(links)

    В цикле for
    .concat()
    .push()
*/
/*
    products = [
        {
            name: "Iphone 14"
        },
        {
             name: "Iphone 14"
        },
        {
             name: "Iphone 14"
        }
    ]
    .map() - метод массива
    .forEach() - метод применяется и для массива и для итерируемого списка
    for(let i = 0; i < products.length; i++) {
        console.log(<p>products[i].name</p>)
    }
*/

// ["Столица Германии", "Столица Кыргызстан"]
// Создаем теги h5
// Находим все эти заголовки. И к каждому из них назначаем текст из массив 
/*
    arr = [10, 20, 30, 40]

    console.log(arr[0])
    console.log(arr[1])
    console.log(arr[2])
    console.log(arr[3])

    const descriptions(NodeList) = [
        {
            innerText: "Hello"
        },
        {
            innerText: "Hello World"
        }
    ]
    descriptions[0].innerText = "Привет, Мир"

    innerText - свойство позволяет получать или изменять текстовое содержимое тега

    firstDescr = {
        innerText: "Hello"
    }
    firstDescr.innerText = "Привет"
    firstDescr = {
        innerText: "Привет"
    }
*/

const links = [
    {
        name: "Google",
        link: "https://google.com"
    },
    {
        name: "Facebook",
        link: "https://facebook.com"
    },
    {
        name: "Instagram",
        link: "https://instagram.com"
    },
    {
        name: "Linkedin",
        link: "https://linkedin.com"
    },
]

const htmlLinks = document.querySelectorAll('a')

for(let i = 0; i < links.length; i++) {
    // console.log(links[i].name, links[i].link)
    htmlLinks[i].innerText = links[i].name
    htmlLinks[i].setAttribute('href', links[i].link)
}

/*
    1. i = 0, 0 < 4 - true, i++
            <a href="" class="my-link">LINK</a> --> <a href="" class="my-link">Google</a>
                    
            htmlLinks[0].innerText = links[0].name
            htmlLinks[0].innerText = Google

            htmlLinks[0].setAttribute('href', links[0].link)
            htmlLinks[0].setAttribute('href', https://google.com)

            <a href="https://google.com" class="my-link">Google</a>

    2. i = 1, 1 < 4 - true, 
            <a href="" class="my-link">LINK</a> --> <a href="" class="my-link">Google</a>
                    
            htmlLinks[1].innerText = links[1].name
            htmlLinks[1].innerText = Google

            htmlLinks[1].setAttribute('href', links[1].link)
            htmlLinks[1].setAttribute('href', https://google.com)
            
            <a href="https://google.com" class="my-link">Google</a>
*/

// У первого тега a будет название ссылки из свойства name 1го элемента массива links
// <a>Google</a>
// У первого тега a должно быть в атрибуте href значение свойства link 1го элемнта массива links
// <a href="https://google.com">Google</a>

// Задача. Каждому тегу a задать название ссылки из свойства name, и значение атрибута href взять из
// свойства link.
/*
    {
        name: "Google",
        link: "https://google.com"
    }
    -> <a href="https://google.com" class="my-link">Google</a>
*/

/*
    getAttribute('href') - метод, который позволяет получить значение атрибута
         с переданным в названии параметром
    
    setAttribute('href', 'google.com') - метод, который позволяет задать значение атрибута
        с переданным в названии параметром

        <img src="img1.jpg" alt="">
        img - название тега
        src - название атрибута
        img1.jpg - значение атрибута

    const img = document.querySelector('#img')
    // console.log(img.getAttribute('src')) получили ./img1.jpg
    img.setAttribute('src', './img2.jpg')
*/

// 
// Задача. Для каждого тега img, в атрибуте src добавить ./img1.jpg
// <img src="./img1.jpg">
const images = document.querySelectorAll('img')
for(let i = 0; i < images.length; i++) {
    images[i].setAttribute('src', './img1.jpg')
}

/*
    querySelectorAll('img')
    const images = [<img>,<img>...]
    images[i].setAttribute('src', './img1.jpg')
*/

// ДЗ. В соотв-е теги (h5, img, p) подтянуть данные из объектов массива posts
const posts = [
    {
        title: "Столица Германии",
        descr: "Берлин - ....",
        img: "img1.jpg"
    },
    {
        title: "Столица Кыргызстана",
        descr: "Бишкек - ...",
        img: "img2.jpg"
    }
]

/*
    <body>
        <h1>Столицы городов</h1>
        <article class="item-1">
            <h5 class="title">Первый заголовок(title) из массива posts</h5>
                <img src="Первая ссылка на картинку из массива posts">
            <p class="descr">Первый descr из массива posts</p>
        </article>
        <article class="item-2">
            <h5 class="title">Второй заголовок(title) из массива posts</h5>
                <img src="Вторая ссылка на картинку из массива posts">
            <p class="descr">Второй descr из массива posts</p>
        </article>
    </body>
*/