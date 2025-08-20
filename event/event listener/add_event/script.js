// object event

let btn1 = document.querySelector("button");
// btn1.onclick = (e) => {  //  (e) is veriable of event
//     console.log(e);  // event
//     console.log(e.type);  // click
//     console.log(e.target);  // full code
//     console.log(e.target.value);  // null
//     console.log(e.clientX, e.clientY);  // clintX = value, cliuentY = value
// }


//  ==>  Listener event [add] 

//  (1)  node.addEventListener(event, callback)

btn1.addEventListener("click", () => {  
    console.log("Clicked by using Listener Event");
});

btn1.addEventListener("click", (e) => {  //  (e) is veriable
    console.log("Clicked by using Listener Event with double handler");
    console.log(e);  // event
    console.log(e.type);  // clic
});


//  (2)  node.removeEventListener(event, callback)