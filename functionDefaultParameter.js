
// Function default parameter for not provided values
function defaultParameter(num1, num2){
    return num1 + num2;
}
const total = defaultParameter(10, 20);
console.log(total);
const total2 = defaultParameter(10);
console.log(total2);
// show not a number(NAN) as the second parameter has not given
// a solution:
function defaultParameter(num1, num2){
    if(num2 === undefined){
        num2 = 0;
    }
    return num1 + num2;
}
const total3 = defaultParameter(10);
// OR
function defaultParameter(num1, num2){
    num2 = num2 || 0;
    return num1 + num2;
}
const total4 = defaultParameter(10);
console.log(total4);
// In ES6 the default value of the parameter can be set.
function defaultParameter(num1, num2=50){
    return num1 + num2;
}
const total5 = defaultParameter(10);
const total6 = defaultParameter(10,15);
console.log(total5);
console.log(total6);