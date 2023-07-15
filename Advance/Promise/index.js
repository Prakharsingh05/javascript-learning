//Promise

const bucket = ['coffee' , 'chips' , 'vegetable' , 'salt' , 'rice' ];

// promise is type of value which we dont know now but we will be knowing that value in the future



//creating promise
const friedRicePromise=new Promise((resolve , reject)=>{
            if(bucket.include("vegetables")&& bucket.includes("salt")&& bucket.includes("salt")){
                resolve("Fried Rice");

            }else{
                reject(Error('not found'));
            }    
});

friedRicePromise.then(
    //this will run if promise will resolve 
(datafrompromise)=>{

    console.log("lets eat",datafrompromise);
},
