// Fetch API ==>  Aplication Programing Interface

//   ==> it uses Request and Response object

//  ==> fetch() method to use fetch data. 

// syntax: 

// let promise = fetch(URL, [Option])

const URL =  " https://potterapi-fedeperin.vercel.app ";


const getPotter = async () => {
console.log("getting data...")
let response = await fetch(URL);
console.log(response); // json format
// console.log(response.ok); // you can print value
let data = await response.json();
console.log(data)
}

