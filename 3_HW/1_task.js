let startNum = 2, finishNum = 100;
let res = Array();
let changeNum;
let flag;
while (startNum <= finishNum) {
    flag = true
    changeNum = 2
    while (startNum > changeNum) {
        if (startNum % changeNum === 0) {
            flag = false
            break;
        }
        changeNum++;
    }
    if (flag) {
            res.push(startNum)
        }
    startNum++;
}
console.log(res.join(' '))
