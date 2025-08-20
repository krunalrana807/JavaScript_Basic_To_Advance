let modebtn = document.querySelector("button");
let currmode = "light"; // dark

modebtn.addEventListener("click", () => {
    if(currmode === "light") {
        console.log("dark");
        currmode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        console.log("light");
        currmode="light";
        document.querySelector("body").style.backgroundColor="white";
    }   
    console.log("you try to change mode", currmode);
})

