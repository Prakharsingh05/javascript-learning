// function returning function

function myFunc(){
    return {name: "Prakhar", age: 22} // we can return anything


}

const ans = myFunc();

console.log(ans);



function myFunc2(){

    function hello(){
        console.log("hello world");
    }

    return hello;
}
const ans2 = myFunc2();

ans2();
console.log(ans2);

// this all higher order function