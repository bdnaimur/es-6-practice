// Arrow function, multiple parameter, function body
//  Normal Way
function add(num1, num2){
    return num1 + num2;
}
const result = add(10, 20);
console.log(result);
// Function declare in variable here function name can be given or not.
const doubleIt = function(num){
    return num*2;
}
const result2 = doubleIt(10);
console.log(result2);
//  Function declare with arrow sign and the parameter is single the () may be given or not but the parameter is more than one then ()is must
const tripleIt = (number) => number*3;
const result3 = tripleIt(10);
console.log(result3);

const fourFold = (number1, number2=5) => number1*4 + number2*4
const result4 = fourFold(10);
console.log(result4);
// Arrow function with multiple line body 
const multipleLine = (x, y) => {
    const add = x + y;
    const difference = x - y;
    const result = add * difference;
    return result;
}
const result5 = multipleLine(30, 20);
console.log(result5);