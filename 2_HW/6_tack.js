/* Шестое задание */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+': return arg1 + arg2;
        case '-': return arg1 - arg2;
        case '/': return arg1 / arg2;
        case '*': return arg1 * arg2;
    }
}
// test function call
console.log(mathOperation(2,4,'+'))
console.log(mathOperation(2,4,'*'))
console.log(mathOperation(2,4,'-'))
console.log(mathOperation(2,4,'/'))
