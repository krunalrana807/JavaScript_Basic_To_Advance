// make a variable 



let a = 5;
let b= 10;
console.log("a = ", a);
console.log("b = ", b);
console.log("a + b = ", a + b);
try {
    console.log("a - b = ", a - c); // error  so code not run even code is true
} catch (err) {
    console.log(err);
}
console.log("a * b = ", a * b); // true but not run after error
console.log("a / b = ", a / b); // true


// try-catch

// syntax: 

// try {
//     ... normal code

// } catch (err) { // err is error object

//     ... handling error
    
// }


//     ==>   use to try catch to avoid error of line code and print to all code except error code