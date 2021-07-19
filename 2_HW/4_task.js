/* Четвёртое задание */
let min = 0, max = 15;
let a = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('Произвольное число диапазона:', a);
let numArray = Array.from(Array(max + 1).keys());
switch (a) {
    case 0:
        var res = numArray.join(' ');
        break;
    case 15:
        res = max;
        break;
    default:
        res = numArray.slice(a).join(' ');
        break;
}
console.log('Искомый диапазон чисел составил', res);
