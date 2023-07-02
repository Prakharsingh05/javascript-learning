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

ChangeText(heading1 , "one" , "violet" , 2000, ()=>{
ChangeText(heading2,"TWO" , 'green',1000)
});