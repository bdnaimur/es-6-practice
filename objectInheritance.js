// Inheritance, extends class, super, class method

class Parent{
    constructor(){
        this.FatherName = "Haisam";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.Name = name;
    }
    getFullName(){
        return this.Name + " " + this.FatherName;
    }
}
const baby1 = new Child("Arman");
const baby2 = new Child("Jarman");
console.log(baby1.getFullName());
console.log(baby2);