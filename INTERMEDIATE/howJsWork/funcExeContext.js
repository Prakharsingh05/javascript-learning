//fucntion execution context 


// 1 - first step will  br global execution context
//

let foo = "foo";

console.log(foo);

function getFullName(firstName , LastName){

    console.log(arguments);

    let myVar = "var inside func";

    console.log(myVar);

    const fullName = firstName + " " + LastName;
    return fullName;

}

const personName = getFullName("prakhar" , "singh");
console.log(personName);