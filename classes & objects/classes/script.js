// make a class

class Toyotacar {
    start() { // start fuction
        console.log("start");
    }

    stop() { // stop function
        console.log("stop");
    }

    setBrand(brand) { // set brand function   ===>  pass brand as parameter
        this.brand = brand; // set the brand property
    }    // this refers to the current instance of the class
}


// create object from class

// syntax:  let myObj = new MyClass();

// new keyword is used to create an instance of the class

let fortuner = new Toyotacar(); // create object from class  

fortuner.setBrand("Fortuner"); // set brand name   ===>  fortuner is argument
console.log(fortuner.brand); // print brand name

// make second object

let bmw = new Toyotacar(); // new object from class toyotacar
bmw.setBrand("BMW"); // brand value
console.log(fortuner.brand); // print brand name
bmw.start() // print msg
