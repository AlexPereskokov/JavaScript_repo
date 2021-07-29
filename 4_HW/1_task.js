/* Первое задание */
// Всё работает корректно, однако пустое содержимое объекта сложно передать через функуцию
// Можно сделать и функцию без условия и только запускать её на корректных числах, но это костыли уже
// Можно опять же дописать вывод пустого объекта после, что тоже костыли
// В общем, так и не нашёл метода через функцию вернуть в return значение {}, только через console.log()
const numObj = {

}

function decomposition(number) {
    if (number <= 999) {
        numObj.units = (number % 10);
        numObj.tens = Math.floor(number / 10 % 10);
        numObj.hundreds = Math.floor(number / 100);
        return numObj;
    } else
        console.log(numObj)
        return  `Your input ${number} is incorrect number, try again` ;
}

// Test some numbers
let yourNum = 9939;
// let yourNum = 439;
// let yourNum = 3;

console.log(decomposition(yourNum));
