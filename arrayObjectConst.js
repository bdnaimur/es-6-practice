
// Let, const, array declared with const, object declared with const

// The value of const can not reassign twice or more
let hubby = "Elias";
console.log(hubby);
hubby = "Ramjan";
console.log(hubby);
// The value of let can be reassign twice or more
const friends = ["Almas", "Kader", "Hafij", "Sultan"];
console.log(friends);
friends[0] = "Hamid";
console.log(friends);
// The value of any element of an array declared with Const can be reassign but not the whole Array
// const friends = [10,20,30]; it will show an error 
// console.log(friends);
const batchMate = {
    name : "Kabir",
    age : 31,
    occupation : "Job",
    color : "Brown"
}
console.log(batchMate);
batchMate.name = "Jakir";
console.log(batchMate);
// The value of any element of an Object declared with Const can be reassign but not the whole Object
// console.log(batchMate);
