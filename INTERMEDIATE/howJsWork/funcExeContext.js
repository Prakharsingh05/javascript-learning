//fucntion execution context 


// 1 - first step will  be global execution context
//

let foo = "foo";  // in memory creation phase the value of variable foo will be uninitalized becuase it is created using let

console.log(foo);

function getFullName(firstName , LastName){                                                                 //
    console.log(arguments); // array like objects not array it have a properties like indexing and length   //                  
    let myVar = "var inside func";                                                                          //      ----function execution scop     
    console.log(myVar);                                                                                     //        
    const fullName = firstName + " " + LastName;                                                            //    
    return fullName;                                                                                        //
}     
                                                                                                      //          
// 1-function execution phase
// 1.1 - code execution // 1.2 -local memory creation
// when an variable is uninitialized then he stay in tdz (temporlal dead zone)
// javascript moves from global excution context to function execution context

const personName = getFullName("prakhar" , "singh");
console.log(personName);