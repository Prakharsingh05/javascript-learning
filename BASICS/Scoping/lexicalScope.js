//lexical scope

const myVar = "value59";
function myApp(){

    const myVar = "value1";
    function myfunc(){
        const myFunc2 = () =>{
        console.log("inside myFunc" , myVar);

        }
        myFunc2();
    }
   

    myfunc();
    
}

myApp();