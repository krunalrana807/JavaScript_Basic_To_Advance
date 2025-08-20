
// event in object

let btn = document.querySelector("#btn");

btn.ondblclick = (e) => {  // (e) is veriable of event,e,evt you can use
    console.log(e);  // event
    console.log(e.type);  // click
    console.log(e.target);  // full code
    console.log(e.target.value);  // null
    console.log(e.clientX, e.clientY);  // clintX = value, cliuentY = value
    // console.log("click and saw you value");
    // let a=23;
    // a++;
    // console.log(a);
}

//  ==>  remember last eventfirst handle  ::::::::::::::::::::::

// let btn1 = document.querySelector("#btn");
// btn1.onmouseover = (e) => {  //  (e) is veriable of event
//     console.log(e);  // event
//     console.log(e.type);  // click
//     console.log(e.target);  // full code
//     console.log(e.target.value);  // null
//     console.log(e.clientX, e.clientY);  // clintX = value, cliuentY = value
// }