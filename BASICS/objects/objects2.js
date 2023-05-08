
const key = "email";

const person = {

    name : "prkar",
    age: 22,
    "person hobbies" : ["guitar", "sleeping", "listening"]

}

person[key] = "prakarsingh12345@gmail.com";

console.log(person);


/// now how to iterate objects

// for in loop
//Odwbject.keys


for(let key in person){
    console.log(`${key} : ${person[key]}`);
}


console.log(Object.keys(person));

for(let key of Object.keys(person)){

    console.log(person[key]);

}





