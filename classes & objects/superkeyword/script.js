// the super keywordis used to call the constructor of its parent class to access the parent properties and methods.

// syntax:

// super( args ) // call parent constructor

// super.parentMethod( args )

// example : 

class Person {
    constructor(name) { // also declare in child class in super keyword()
        
        this.species = "homo species";
        this.name = name;
    } 

    eat() {
        console.log("You must eating time to time");
    }

    // sleep() {
    //     console.log("You must be sleep early night");
    // }

    // work() {
    //     console.log("if work() in both side parent-child not a execute parent,execute a child class work()")
    // }
}

// engineer is object

class Engineer extends Person { // engineer is object to take propertis or function of Parent
    constructor(name) {
       
        // ==>> youn must declare a (name) in super() you want to add in your object so 
        super(name); // to envoke parent class constructor
       
    }
    work() {
        console.log("You are better to self work");
    }
}


// let krunal = new Engineer();


//  make a new  enginner object

let engineerobj = new Engineer("krunal");



// example (1)   

// class User{
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData() {
//         console.log("website data")
//     }
// }

// let student1 = new User("roy", "roy@gmail.com");
// let student2 = new User("pearl", "pearl@gmail.com");


// example (2)

let data = "this is secret"

class user{
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewdata() {
        console.log("website data")
    }
}

class admin extends user{
    constructor(name, email) {
        super(name, email);  // keyword to use constructor to call
    }
  editdata() {
    data = "some more special";
  }
}


let student3 = new user("abhi", "abhi@gmail.com");
let student4 = new user("prachi", "prachi@gmail.com");

let admin1 = new admin("admin", "admin@gmail.com");
