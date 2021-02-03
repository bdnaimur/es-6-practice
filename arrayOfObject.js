const students = [
    {id:41, name: "Sunny"},
    {id:51, name: "Omar"},
    {id:45, name: "Jaman"},
];
newStudents = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    // for (let j = 0; j < element.length; j++) {
    //     const nameElement = element.name[j];
    //     console.log(nameElement);
    // };
    newStudents.push(element.name);
    console.log(element.name);
}
console.log(newStudents);
// OR
const names = students.map(x => x.name);
console.log(names);