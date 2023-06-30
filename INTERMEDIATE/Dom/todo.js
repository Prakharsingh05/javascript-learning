//dom

//dcoument object moddel






//select element using get element by i

// const mainheading = document.getElementById("main-heading");

//console.log(mainHeading);






// select element using query selector

// const mainHeading = document.querySelector("#main-heading");

// onscroll=()=>{mainHeading.textContent="scrolling"};







//change the styles of elements

const mainHeading =document.querySelector("div.headline h2");
const btn = document.querySelector(".change-clr");
btn.onclick  = ()=>{
    mainHeading.style.color = (mainHeading.style.color=="green")? "white" :"green";
}


//get and set attributes

const link = document.querySelector("a");
console.log(link.getAttribute("href"));

const inputElement = document.querySelector(".form-todo input");



//get multiple elements using getElements by class name
// get multiple elements items using querySelectorALL

const navItems = document.getElementsByTagName("a"); // HTML collections 
console.log(navItems[1]);// this is array like object not array{indexing}
console.log(navItems[2]);
console.log(navItems[3]);

// array like object -> indexing , length property can be performed 

//simple for 
const btn_2 = document.querySelector(".chngclr");
btn_2.onclick = ()=>{
for(let i = 0; i<navItems.length; i++){

    const navItem = navItems[i];
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "black";
    
}
}

//for of loop



//forEach - this cannot be used with HTML collection

const navItems2 = document.querySelectorAll("nav-item"); // NodeList
console.log(navItems[1]);// this is array like object not array {indexing} 
console.log(navItems[2]);
console.log(navItems[3]);












 