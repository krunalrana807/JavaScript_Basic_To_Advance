//                                      inline Event
// event in javascrit

// example

// ==> if you are inline event handle and also handle with js then first priority  go to javascript

// syntax:
 
    //   Node.event =() => {
    //     your code
    //   }

    
let btn = document.querySelector("#btn");

btn.onclick = ()=>{
    console.log("btn was clicked");  // this is applied in console not html inline event
    let a=24;
    a++;
    console.log(a); //25
}

// ==> must know about event you are not reuse same event 

// ==> if you use one code same event then first is override

// ==> also run second code.