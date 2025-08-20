// constructor() is method

// automatically invoked by new, initializes object


class Toyotacar {
    constructor(brand, mileage) { // constructor method
        console.log("creating new object"); 
        this.brand = brand; // this refers to the current instance of the class
        this.mileage = mileage;
    }
    start() { // start fuction
        console.log("start");
    }

    stop() { // stop function
        console.log("stop");
    }

    // setBrand(brand) { // set brand function   ===>  pass brand as parameter
    //     this.brand = brand; // set the brand property
    // }    // this refers to the current instance of the class
}


// // create object from class

// // syntax:  let myObj = new MyClass();

// ==> new keyword is used to create an instance of the class

 let fortuner = new Toyotacar("vfc", 25); // create object from class  
console.log(fortuner);
// fortuner.setBrand("Fortuner"); // set brand name   ===>  fortuner is argument
// console.log(fortuner.brand); // print brand name
 let fortune = new Toyotacar("ktm", 20); // add initialize time to mileage