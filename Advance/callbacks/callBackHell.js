//  callbaack hell , pyramid of doom
//asynchronous programming

//callback  hell
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");

// setTimeout(()=>{
//     heading1.textContent="Heading 1";
//     heading1.style.color ="violet";
//     setTimeout(()=>{
//         heading2.style.color ="violet";
//         heading2.textContent="Heading 2";

//     },1000);

// },1000);


function ChangeText(element , text , color, time , onSuccessCallback , onFailureCallback ){
    setTimeout(()=>{
        if(element){
            element.textContent=text;
            element.style.color=color ;
            if(onSuccessCallback){
            onSuccessCallback();
        }
    }else{
        if(onFailureCallback){
        console.log("Your element does not exist");
    }
    }
},time)


}

// pyramid of doom
changeText(heading1, "one","violet",1000,()=>{
    changeText(heading2, "two","purple",2000,()=>{
      changeText(heading3, "three","red",1000,()=>{
        changeText(heading4, "four","pink",1000,()=>{
          changeText(heading5, "five","green",2000,()=>{
            changeText(heading6, "six","blue",1000,()=>{
              changeText(heading7, "seven","brown",1000,()=>{
                changeText(heading8, "eight","cyan",1000,()=>{
                  changeText(heading9, "nine","#cda562",1000,()=>{
                    changeText(heading10, "ten","dca652",1000,()=>{
                      
                    },()=>{console.log("Heading10 does not exist")})
                  },()=>{console.log("Heading9 does not exist")})
                },()=>{console.log("Heading8 does not exist")})
              },()=>{console.log("Heading7 does not exist")})
            },()=>{console.log("Heading6 does not exist")})
          },()=>{console.log("Heading5 does not exist")})
        },()=>{console.log("Heading4 does not exist")})
      },()=>{console.log("Heading3 does not exist")})
    },()=>{console.log("Heading2 does not exist")})
  },()=>{console.log("Heading1 does not exist")})


// ChangeText(heading1 , "one" , "violet" , 2000, ()=>{
// ChangeText(heading2,"TWO" , 'green',1000)
// });