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

//add new html elements to page

//innerHTML to add html elements

const todoList = document.querySelector(".todo-list");

// todoList.innerHTML += "<li>New Todo</li>";
// todoList.innerHTML += "<li>New Todo</li>";
// todoList.innerHTML += "<li>New Todo</li>";

//document.createElement()

// const newTodoItem =document.createElement("li");

// // const newTodoTextItem =document.createTextNode("Javascript");
// // newTodoItem.append(newTodoTextItem);
// // todoList.append(newTodoItem);



//clonning nodes

// const ul = document.querySelector(".todo-List");
// const li = document.createElement("li");
// li.textContent="new todo";
// const li2 = li.cloneNode(true);
// ul.append(li);
// ul.append(li);

//static list vs live list

const listItems = document.querySelectorAll(".todo-list li");

const sixthLi = document.createElement("li");

sixthLi.textContent ="item 6";

const ul = document.querySelector(".todo-list");

ul.appendChild(sixthLi);
console.log(listItems); // nodelist will still be five beacuse this is static list

//so queryselectorAll return static list
// and getelemenetsbysomething returns live list


//how to get the dimentions of the  elements

//height width

const  sectionTodo = document.querySelector(".section-todo");

sectionTodo.getBoundingClientRect(); // thi will return object which will be conataining hight width


// intro to events

// there are three ways to add events

// 1st - add in html file tag
// <button class = "btn btn-headline" onclick = "LearnMore()">Learn more</button>

//2nd - add in js file by selecting element

// const btn1 = document.querySelector("lrn");

// btn.onclick =()=>{
//     console.log('clicked');
// }

//3rd - using add event listner 
const btn1 = document.querySelector(".lrn");
btn1.addEventListener("click", ()=>{console.log("clicked")})
















// event bubbling / event propagation
// event capturing
// event delegation