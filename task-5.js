const num1 = 10;
const num2 = 20;

// simple if-else 
if (num1 > num2) {
    const result = num1 * num1;
    console.log(result);
}
else {
    const result = num1 + num2;
    console.log(result);
}

// ternary operator
const result = num1 > num2 ? num1 * num1 : num1 + num2;
console.log(result);