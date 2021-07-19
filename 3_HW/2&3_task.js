const basket = [['Phone', 15000, 12], ['Headphones', 5000, 3], ['Mouse', 3000, 7]]

function countBasketPrice (array) {
    let res = 0;
    for (let i = 0; i < array.length; i++) {
        res += array[i][1] * array[i][2];
    }
    return res;
}

console.log(countBasketPrice(basket));
