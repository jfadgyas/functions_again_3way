function mathFunc1(n1, n2){
    const num1square = n1 * n1;
    const num2square = n2 * n2;
    return (num1square + num2square) * (num1square + num2square)
}

const mathFunc2 = function (num1, num2){
    const num1square = num1 * num1;
    const num2square = num2 * num2;
    return (num1square + num2square) * (num1square + num2square)
}

const mathFunc3 = (numb1, numb2) => {
    const num1square = numb1 * numb1;
    const num2square = numb2 * numb2;
    return (num1square + num2square) * (num1square + num2square)
}

console.log(mathFunc1(2,3));
console.log(mathFunc2(2,3));
console.log(mathFunc3(2,3));