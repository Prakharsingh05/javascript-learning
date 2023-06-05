//lexical scoping




const lastName = "Singh"; // lastName in globle execution phase

const printName = function(){


    const firstName = "Prakhar";
    console.log(firstName);
    console.log(lastName); // js doesnt found anything related to lastName in function execution scope then it will search lastName in globle execution phase memory
}

printName();