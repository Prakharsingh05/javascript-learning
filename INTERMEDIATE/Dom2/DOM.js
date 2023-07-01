const rootNode = document.getRootNode();
//console.log(rootNode.childNodes); // <html>...</html>
const htmlElementNode = rootNode.childNodes[0];

console.log(htmlElementNode);
console.log(htmlElementNode.childNodes); // NodeList(3) [head, text , body]

const headElementNode = htmlElementNode.childNodes[0];

const textNode1 = htmlElementNode.childNodes[1];

const bodyElementNode = htmlElementNode.childNodes[2]; 

console.log(headElementNode.parentNode);

//sibling relation
console.log(headElementNode.parentSibling);


const h1 = document.querySelector("h1");

h1.parentNode.style.color = "green";

