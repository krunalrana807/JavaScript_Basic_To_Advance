// make a inheritance   === ek class thi bija class ma propery and method pass thay

// syntax: 

// class Parent {

//  ==>  you make a function, pass properties, values ete;

// }

// class Child extends Parent {

// }

// example  

class Parent{ // parent class
    hello() { // method of parent class   also called function 
        // console.log("hello");
    }
}

class Child extends Parent{ // child class

    // child class inherits from parent class

} 
// make a object of child class

//     ===>  must be made a obj to take Parent

let child = new Child(); // create an instance of child class 

// example 



// ===>>>>    if child & parent have same method, child method will be use
//                                  [method override]




class Person {
    constructor() {
        this.species = "homo species";
    } 

    eat() {
        console.log("You must eating time to time");
    }

    sleep() {
        console.log("You must be sleep early night");
    }

    work() {
        console.log("if work() in both side parent-child not a execute parent,execute a child class work()")
    }
}

// engineer is object

class Engineer extends Person { // engineer is object to take propertis or function of Parent
    work() {
        console.log("You are better to self work");
    }
}


let krunal = new Engineer(); //  make a enginner object

// example

class doctor extends Person { // doctor is object to take propertis or function of Parent also called instance
    run() {
        console.log("You are better to opration work");
    }
}

let doctor1 = new doctor();  // its a variable to store a new object