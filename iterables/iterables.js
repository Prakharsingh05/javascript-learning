// itrables
//jispe hum for of loop laa sakte hai

// string , array are iterables

const firstName = "prakhar";

for(let char of firstName){

    console.log(char);
}


const items = ["item1" , "item2" , "item3"];

for(let item of items){
    console.log(item);
}

//objects are not iterable

//array like object
//jinke pas length property hoti hai
//aur jinko hum index se access krsakte hai
//example : - string

const  firstName1 = "prkhar";

