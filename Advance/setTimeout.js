
//-------------synchronous programming--------------

console.log("synchronous programming"); // first this will execute

for(let i = 1; i<10000; i++){
    console.log("inside for loop"); // then this will execute
}


console.log("synchronous programming");// then inlast this will execute


// so javascript is a synchronous programming and single threaded

//setTimeout

console.log("script start");

const hello=()=> console.log("hello world");

setTimeout(hello,1000); // this setTime out method will execute upper funtion after 1 sec delay

console.log("script End");