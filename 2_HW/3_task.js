/* Третье задание */
let a = 0, b = -2;
let sum = a + b;
// console.log(sum);
checkPositive = Math.sign(a) + Math.sign(b);
console.log(checkPositive)
switch(checkPositive) {
    case 2:
    case 1:
        console.log('Числа положительные, разность равна: ', Math.abs(a - b));
        break;
    case -2:
        console.log('Числа отрицательные, произведение равно: ', a * b);
        break;
    case 0:
    case -1:
        let res = (sum !== 0)
        ? console.log('Числа разных знаков, сумма равна: ', a + b)
        : console.log('Числа равны нулю, разность равна: ', sum);
        break;
}
