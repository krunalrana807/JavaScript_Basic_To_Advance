let modebtn = document.querySelector("button");
let currmode = "light"; // dark
let body = document.querySelector("body");

//  ====>  using in class to must know about whene adding class must remove use in code
//                                                ========          ========             

modebtn.addEventListener("click", () => {
    if(currmode === "light") {
        console.log("dark");
        currmode="dark";
        body.classList.add("dark"); // using class
        body.classList.remove("light");
    }else{
        console.log("light");
        currmode="light";
       body.classList.add("light");  // add class of light
       body.classList.remove("dark"); // remove class of dark
    }   
    console.log("you try to change mode", currmode);
})

// let p = document.querySelector("p");
// let body = document.querySelector("body");
// p.style.color="red";