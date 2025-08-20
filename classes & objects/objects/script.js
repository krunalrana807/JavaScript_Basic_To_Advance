// make a object 

const student = {
    fulName : "krunal rana",
    marks : 75,
    printMarks : function() { // method
        console.log("marks = ", this.marks); // 'this' refers to the current object
    }
};

 // Prototype in js

// syntax :  __proto__

// for Example :

const employee = {
    calcTax() { // method  
        console.log("tax rate is 10%"); 
    }
};

const karanArjun = { 
    salary: 50000,
    calcTax() { // method  
        console.log("tax rate is 20%"); 
    }
};

karanArjun.__proto__ = employee; // setting prototype