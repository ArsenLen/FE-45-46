// При нажатии на каждую картинку в блоке section, в .images-container
// отображать соответствующую картинку, т.е ту картинку, на которую
// кликнули, ту и надо отобразить в .images-container

/*
    const picture = document.querySelector ('.images')
    let place = document.querySelector ('.images-container')

    function change (event) {
        console.log(event.target)
        place.setAttribute('src', event.target.src)
    }
    picture.addEventListener('click', change)
*/

/* 
    const firstImg = document.querySelector('#first-img') 
    const secondImg = document.querySelector('#second-img') 
    const thirdImg = document.querySelector('#third-img') 
    firstImg.addEventListener()
    secondImg.addEventListener()
    thirdImg.addEventListener()
*/
// const myImages = document.querySelectorAll('img')
// const images = document.querySelectorAll('.images img')
const imagesSection = document.querySelector('.images')
const images = imagesSection.querySelectorAll('img') // NodeList [{img1}, {img2}]
const imagesContainer = document.querySelector('.images-container')

/* 
    for(let i = 0; i < images.length; i++) {
        // console.log(images[i]) каждая картинка - html elem img
        images[i].addEventListener('click', function(event) {
            imagesContainer.setAttribute('src', event.target.src)
        })
    }
*/
// Переписать код выше, используя метод forEach()
// 1. Какое действие? На каждую картинку повесить слушатель клика. Картинки хранятся в images = [{}, {}]
// 2. Что делать по клику? По клику для imagesContainer задавать атрибут src, со значением полученным при клике на каждую картинку
/*
    images.forEach(function(image) {
        image.addEventListener('click', function(event) {
            imagesContainer.setAttribute('src', event.target.src)
        })
    })
*/

/*
    <img> => {img}
    {img}.addEventListener
    images.addEventListener - не можем
    const images = [{<img>}, {<img>}, {<img>}]
    images[0].addEventListener
    images[1].addEventListener

    imagesContainer => {<img src="">}
    images.forEach(function(image) {
        image.addEventListener('click', function(event) {
            imagesContainer.setAttribute('src', event.target.src)
        })
    })

*/

/*
    https://site.com/images/img1.jpg
    const URL_IMAGE
    URL_IMAGE+"/img1.jpg"
    getAttribute('src') - возвращает то, как путь указан в html <img src="./img1.jpg"> - ./img1.jpg
    el.src - возвращает абсолютный путь -> <img src="./img1.jpg"> -> D://project/project1/img1.jpg
// Задача. Умножить каждый элемент массива на 10 и отобразить в консоли
 const numbers = [10, 20, 30, 40, 50]
    for(let i = 0; i < numbers.length; i++) {
        console.log(i)
        console.log(numbers[i] * 10) // то же самое, что и item, получаемый в коллбэке forEach()
    }

   
    numbers.forEach(function(number) {
        console.log(number * 10)
    })
*/

// Задача. Есть массив имен names=["Arsen", "Anna", "Aleksei", "Yurii"]. Нужно в консоли
// вывести каждое имя, которое будет записано в верхнем регистре, т.е все буквы сделать заглавными
    
/*
    const names = ["Arsen", "Anna", "Aleksei", "Yurii"]
    names.forEach(function(name) {
        console.log(name.toUpperCase())
    })
*/

/*
    string.toUpperCase() - метод, который переводит буквы в строке в верхний регистр.  arsen -> ARSEN
*/
/*
numbers.forEach(function(number, idx, arr) {
    console.log(number * 10)
    arr.push(numbers*10)
})
*/

/*
    arr.forEach() - метод массива, который позволяет выполнить действие(function)
         для каждого элемента массива. 
        Использовать когда нужно совершить одну и ту же операцию для каждого элемента массива
    arr.forEach() принимает один параметр или аргумент:
        коллбэк функция, которая описывает действие, применяемое к каждому элементу массива
        Эту функцию можно объявить заранее или внутри метода
    Коллбэк, передаваемый в .forEach() получает несколько параметров:
        1. item - каждый элемент; текущий элемент; элемент в текущей итерации. 
            то же самое, что и arr[i] в цикле for
        2. index - индекс текущего элемента. 0 - индекс первого элемента, 1 - индекс второго элемента...
        3. arr - тот массив, на котором вызвали forEach
    forEach() может применять для итерируемых(массивоподобные) структур данных
 */

// декларативность - когда говорим, что хотим получить
// императивность - когда описываем шаги, которые приведут к тому, что хотим получить
// 1. images[0] = <img id="first-img">.addEventListener 
/*
    elem.addEventListener()
    elem - html element. 
    images = [
        {}.addEventListener(),
        {}.addEventListener(),
        {}.addEventListener()
    ]
*/