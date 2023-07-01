

// //Event bubbling
const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// child.addEventListener("click" , ()=>{
//     console.log("you clicked on child");
// });


// parent.addEventListener("click" , ()=>{
//     console.log("you clicked on parent");
// });


// grandparent.addEventListener("click" , ()=>{
//     console.log("you clicked on grandparent");
// });
// // if child is called then automaticcallyy parent and granparent event will be called becuse this is called event bubbling




// //Now capturing event



// child.addEventListener("click" , ()=>{
//     console.log("captured !!!! child");
// }, true);


// parent.addEventListener("click" , ()=>{
//     console.log("captured !!!! parent");},
// true);


// grandparent.addEventListener("click" , ()=>{
//     console.log("captured !!!!grandparent");
// });


//Event Delegation

grandparent.addEventListener("click" , ()=>{
    console.log("youCLcicked")
}); // after this even we click on only child conatianer grandparent wwill be automatically called so to avoid this we can use event object 

