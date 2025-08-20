// ========================================

//            Synchronous

// ========================================

// Synchronous means sequence

// ===========>>>>>>>>>>>>>  must comment to run for result  <<<<<<<<<<<<<<<<<<========================

// console.log("one");
// console.log("two");
// console.log("three");

// to print in step by step in sequence

// ========================================

//            Asynchronous

// ========================================

// Asynchronous means print allow to next instruction immediately,

//  ==>> because sometime bloked previous instruction.

// console.log("five");
// console.log("six");
// console.log("seven");

// setTimeout(() => { // this is function to when you want to print in time
//     // 4 second = 4000 milisecond
//     console.log("Hello"); // this is print after 4 second
// }, 4000)

// // do not wait for print a setTimeout statment it print then 4 sec to print timeout

// console.log("eight");
// console.log("nine");

// ========================================

//            Callback (argument)

// ========================================

// means passed as an argument to another function

// function sum(a,b) {
//     console.log(a+b);
// }

// function calculator(a,b, sumCallback) { // callback to sum
//     sumCallback(a,b); // pass argument
// }

// calculator(1,5, sum);

// ========================================

//            Callback Hell (setTimeout) when use always that asynchronous

// ========================================

// means nested callback stacked below one another forming a pyramid structure.

// function getData(dataId, getNextData) {
//   // time to search data for take 2 second
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) { // put a condition
//       // if next data is available so print that
//       getNextData(); // call nextdata
//     }
//   }, 2000); // print after 2 second
// }

// // but want to print data after 2 second(getnextData) use

// // callback Hell

// getData(1, () => {
//   // pass NextData withe arrow function
//   console.log("getting data 2... ");
//   getData(2, () => {
//     // print after 2 sec
//     console.log("getting data 3... ");
//     getData(3, () => {
//       // print every after 2 sec
//       console.log("getting data 4... ");
//       getData(4, () => {
//         console.log("getting data 5... ");
//         getData(5, () => {
//           console.log("getting data 6... ");
//           getData(6, () => {
//             console.log("getting data 7... ");
//             getData(7, () => {
//               console.log("getting data 8... ");
//               getData(8, () => {
//                 console.log("getting data 9... ");
//                 getData(9, () => {
//                   console.log("getting data 10... ");
//                   getData(10);
//                 });
//               });
//             });
//           });
//         });
//       });
//     }); // call nextdata and print after 2 sec
//   });
// });

// ========================================

//           Promises

// ========================================

// means "eventual" completion of task. it is object in js.

// it is solution to callback hell.

// syntax:
//                   class
// let promise = new Promise( (resolve, reject) => {...})
//                         function with 2 handlers

// handler resolve means your promise is complete, successful
// reject means your promise is fullfill but error

// tree state in promise  = (1)pending (2)fullfilled (3)rejected

// let promise = new Promise((resolve, reject) => {
//     console.log("I am  Promise") // promise state pendind
//     // resolve(123); // fullfilled promise
//     // resolve("success") // promise result succes & state fullfilled
//        reject("some error") // generate automatic error by js
// })

// ========================================

//          How to Use Promises

// ========================================

// syntax:

// promise.then((res) => {...}) // fullfilled

// promise.catch((err) => {...}) // rejected

// const getPromise = () => { // send new promise
//    return new Promise((resolve, reject) => { // return promise to getPromise
//         console.log("I Am a promises");
//         resolve("success");
//         // reject("network error")
//     })
// }

// let promise = getPromise(); // return promiseto promise
// promise.then((res) => { // result automatic avail
//     console.log("promise fullfilled"); // you can print whatever you want
// })

// promise.catch((err) => { // error automatic avail
//     console.log("rejected", err); // you can print whatever you want
// })

//  Asynchronous function

// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data1");
//       resolve("success");
//     }, 4000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data2");
//       resolve("success");
//     }, 4000);
//   });
// }

// console.log("fetching Data1..."); // first print data
// let p1 = asyncFunc1();
// p1.then((res) => {
// //   console.log(res);
//   console.log("fetching Data2..."); // second print data
//   let p2 = asyncFunc2();
//   p2.then((res) => {
//     // console.log(res);
//   });
// });

// ========================================

//   Second trick same as above and output

// ========================================

// console.log("fetching Data1..."); // first print data
// asyncFunc1().then((res) => {  // chaining
// //   console.log(res);
//   console.log("fetching Data2..."); // second print data
// asyncFunc2().then((res) => {
//     // console.log(res);
//   });
// });

// example for Promise Chaining

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data : ", dataId);
//       resolve("Success");
//     }, 2000);
//   });
// }
 
// // call the getData()

// console.log("getting data 1 ...")
// getData(1)
//   .then((res) => {  // short code trick
//     console.log("getting data 2 ...")
//     return getData(2);
//   })                         //  call promise chain = .then in .then
//   .then((res) => {
//     console.log("getting data 3 ...")
//     return getData(3);
//   })
//   .then((res) => {
//     console.log("getting data result ...")
//     console.log(res); //final output
//   });


// ========================================

//              Async - Await (keyword)

// ========================================

// always return promise

// must use function while use async-await and call in other function

// syntax;

// async function myFunc() {...}

// async means compulsory return
// await means too late

function api() {
    return new Promise((resolve, rejec) => {
        setTimeout(() => {
            console.log("Wether data ");
        resolve(200);
        }, 2000)
    }) 
}

// call api()

async function getwetherdata() {
    console.log("getting data1 ...");
     await api(); // 1st time 2 sec
      console.log("getting data2 ...");
     await api(); // 2nd time 2 sec
}

getwetherdata();