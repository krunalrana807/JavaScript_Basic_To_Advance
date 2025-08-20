// object event

let btn1 = document.querySelector("button");
// btn1.onclick = (e) => {  //  (e) is veriable of event
//     console.log(e);  // event
//     console.log(e.type);  // click
//     console.log(e.target);  // full code
//     console.log(e.target.value);  // null
//     console.log(e.clientX, e.clientY);  // clintX = value, cliuentY = value
// }


//  ==>  Listener event  [remove]

//  (1)  node.removeEventListener(event, callback)


btn1.addEventListener("click", () => {
    console.log("Clicked by using Listener Event 1");
});

btn1.addEventListener("click", () => {
    console.log("Clicked by using Listener Event 2");
});

const handler3 = () => {
    console.log("Clicked by using Listener Event 3");
};

btn1.addEventListener("click",handler3);

btn1.addEventListener("click", () => {
    console.log("Clicked by using Listener Event 4");
});

const handler4 =  () => {
    console.log("Clicked by using Listener Event 5");
};

btn1.addEventListener("click", handler4);
// btn1.removeEventListener("click", handler4); // store handler to handler4

// btn1.removeEventListener("click", handler3); // store handler to handler3
  