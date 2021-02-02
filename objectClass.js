// Class, constructor, create object from class
class Student{
    constructor(){
        this.id = 1;
        this.name = "Nahi";
    }
}
const student1 = new Student();
const student2 = new Student();
console.log(student1, student2);
class Student1{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Bagora High School";
    }
}
const student3 = new Student1(12,"Naimur");
const student4 = new Student1(15,"Abir");
console.log(student3, student4);