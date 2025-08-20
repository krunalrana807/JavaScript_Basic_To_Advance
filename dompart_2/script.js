
//   ==>             Attributes  (access, replace value in js)

//   ==========================================
//  getAttribute(att)  to get the attribute value 
//   =========================================


let div=document.querySelector("div");
console.log(div); // print full code

let value=div.getAttribute("id"); // attribute
console.log(value); // id value box

let name=div.getAttribute("name");
console.log(name);

let para=document.querySelector("p");
console.log(para.getAttribute("class"));

//   ==========================================
//  setAttribute(att, value)  to set the attribute value 
//   =========================================

let parA=document.querySelector("p");
console.log(parA.setAttribute("class","id")); // attribute  name change as 'id'


// ==>               Style

//   =======================================
//                node.style (change style using js)
//        ======================================

// example

let paragraph=document.querySelector("p"); // access tag first
console.log(paragraph); // print full code

paragraph.style.color = "red";
paragraph.style.fontSize = "28px";
paragraph.innerText = paragraph.innerText + "joint";
// paragraph.style.visibility = "hidden";


//   =======================================
//                insert element (add element in js)
//        ======================================

//   syntax:

//   let variable = document.createElement("div")


//             Insert Element

//   =======================================
//             node.append(el)  add in end node(inside)
//        ======================================


let newbutton = document.createElement("button");  // create button
newbutton.innerText = "Click me!"; // add value
console.log(newbutton);
 let diV = document.querySelector("div")
 console.log(diV);
 div.append(newbutton) // add button in last in node

 
//   =======================================
//            node.prepend(el)  add in start node(inside)
//        ======================================

let newButton = document.createElement("button");  // create button
newButton.innerText = "Submit"; // add value
console.log(newButton);
 let dIV = document.querySelector("body") // put element you want where (node)
 console.log(dIV);
 div.prepend(newButton) // add button in start in node


//   div.prepend(newbutton) // add button in start

//   =======================================
//            node.before(el)  add before node(outside)
//        ======================================
        

     let newButtoN = document.createElement("button");  // create button
     newButtoN.innerText = "Replace!"; // add value
     console.log(newButtoN);
     let diiiv = document.querySelector("div") // put element you want where ever (node)
     console.log(diiiv); 
     
    div.before(newButtoN) // add button before  outside node 



 //     =======================================
//            node.after(el)  add after node(outside)
//        ======================================

     let newbuttoN = document.createElement("button");  // create button
     newbuttoN.innerText = "Update!"; // add value
     console.log(newbuttoN);
     let diiv = document.querySelector("div") // put element you want where ever (node)
     console.log(diiv); 
     
    div.after(newbuttoN) //  button after  outside 


    // example

     let newheading = document.createElement("h1");
     newheading.innerHTML = "welcome to javascript logic world!!";
     console.log(newheading);

     document.querySelector("body").prepend(newheading);


//                  Delete Elenets

//     =======================================
//          node.remove() remmove node
//        ======================================

let paraa = document.querySelector("p");
paraa.remove(); // remove code

let namenew = document.createElement("p");
namenew.innerHTML = "List";
console.dir(namenew);
document.querySelector("ul").prepend(namenew);


//let ul = document.createElement("ul");
//ul.innerText = "ITEMS";
let p = document.querySelector("p");
console.log(p);
p.innerText = "ITEMS";

//document.querySelector("ul").prepend(ul);