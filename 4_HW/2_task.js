/* Второе задание */
// Из прошлого ДЗ заменить на объекты можно каждый из товаров
// Организовав при этом схожие по описанию ключи для простоты
// Было:
const basket = [['Phone', 15000, 12], ['Headphones', 5000, 3], ['Mouse', 3000, 7]]
// Стало 1.0 (сделать один объект - корзина) :

const newBasket = {
    device: ['Phone', 'Headphones', 'Mouse'],
    price: [1500, 5000, 3000],
    count: [12,3,7],
}
// console.log(newBasket)

// Стало 2.0 (раскидать всё на объекты - собрать в корзине) :

const objPhone = {
    name: 'Phone',
    price: 15000,
    count: 12,
}
const objHeadphones = {
    name: 'Headphones',
    price: 5000,
    count: 3,
}
const objMouse = {
    name: 'Mouse',
    price: 3000,
    count: 7,
}

const objBasket = {
    objPhone,
    objHeadphones,
    objMouse,
}

// Был такой функционал подсчёта корзины
function countBasketPrice (array) {
    let res = 0;
    for (let i = 0; i < array.length; i++) {
        res += array[i][1] * array[i][2];
    }
    return res;
}
// Стал такой

function sumBasket(obj) {
    let res = 0;
    let products = Object.keys(objBasket);
    for (let i = 0; i < products.length; i++) {
        res += objBasket[products[i]]['price'] * objBasket[products[i]]['count'];
    }
    return res;
}

console.log(sumBasket(objBasket));

/* Третье задание */
// Объект однозначно должен быть один, который используется повсюду, принцип ООП
// Единая структура будет соблюдатся объектом, а методы должны быть заложены в него
// Какие-то свойства должны перекрываться в зависомости от представления объекта
// Напирмер количество - важно в корзине и не нужно в ассортименте
// Соответсвенно для разного случая можно модернизировать класс, делая его универсальным
