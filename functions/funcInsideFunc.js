// function inside function


const app = () =>{
  
    const myfunc = () => {

        console.log("hello from myfunc");

    }

    const addTwo = (num1,num2) => {

        return num1+num2;
    }




    console.log("inside app");
}

app();  
