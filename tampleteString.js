// Template string, multiple line string
// using usual method
const firstName = "Jasitn";
const lastName = "Lake";
const fullName = firstName + " " + lastName + " is a good boy";
console.log(fullName);
// using ES6 carot method
const fullName2 = `${firstName} ${lastName} is a good boy`;
const fullName3 = `${firstName} ${30+40} is a good boy`;
console.log(fullName3);
console.log(fullName2);
const multiline = "I love my country"+
"Many love the country"+
"Many miss this country.";
console.log(multiline);
// shoing the result in a single line
// older way to break down it
const multiline2 = "I love my country\n"+
"Many love the country\n"+
"Many miss this country.";
console.log(multiline2);
// ES6 way to break down it in multiline
const multiline3 = `I love my country
Many love the country
Many miss this country.`;
console.log(multiline3);