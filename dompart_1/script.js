// console.log("hello krunal");
// // alert("welcome to in web");
// // document.body.childNodes[3].innerText =" KRUNAL"

// //   =====================================
// //       ==> getElementById(" ");
// //   =====================================  

// let heading = document.getElementById("heading"); //  return value in h1
// console.dir(heading);

// let heaDing = document.getElementsByClassName("heading");
// console.log(heaDing);
// console.dir(heading);

// let para = document.getElementById("p");
// console.log(para);
// console.dir(para);

// //   =====================================
// //       ==>  querySelector(" ");
// //   =====================================  

// // document.querySelector("myId / myClass / tag") // returns first element

// // document.querySelectorAll("myId / myClass / tag") // returns a NodeList (tree root)

// let firstEl = document.querySelector(".p"); // 1st element return
// console.dir(firstEl);

// let allEl = document.querySelectorAll(".p"); // all elements return
// console.dir(allEl);

// let alLEl = document.querySelector("#p"); // all elements return
// console.dir(alLEl);


// //  =====================================
// //       ==>  propertis (get, set, update)
// //     =====================================  

// // =====================================
// //     (1)  ==>  tagName
// //   =====================================  

// // ==> returns tag for element nodes

//  //=====================================
// //     (2)  ==> innerText
// //   =====================================  

// // ==> returns text content of the element and all its children

//  //=====================================
// //     (3)  ==>  innerHTML
// //   =====================================  

// // ==> returns the plain text or HTML contents in the element

//  //=====================================
// //     (4)  ==>  textContent
// //   =====================================  

// // ==> returns textual content even for hidden elements


//  ==>   **  tyes of nodes
//           (1) Text
//           (2) Comment
//           (3) Element

// let div = document.querySelector("heading")
// console.dir(div)

// let headinG = document.querySelector("h1") // is a temporly in console to change element
// console.log(headinG)

//let mango = document.querySelector("li")
// let banana = document.querySelectorAll("li")

// banana[2].innerText = "Graps"  // is change permanently in code

// many more element to want change to give an index[] of node 

// for example above = li [banana] replace a graps  <====


// example
 
let h2 = document.querySelector("h2") // first access elementyou want change in ("h2")
console.log(h2.innerText);

h2.innerText = h2.innerText + "from apna collage students" // property ==> change use innerText

let divs = document.querySelectorAll(".box");
console.dir(divs[0]);

let idx=1;
for(div of divs){
  // console.log(div.innerText)
  div.innerText = `New added by using Loop ${idx}`;
  idx++;
}

// divs[0].innerText = "New Box add by Use Properties"
// divs[1].innerText = "New Box add by Use Properties"
// divs[2].innerText = "New Box add by Use Properties"