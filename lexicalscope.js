//lexical scoping




function getFullName(firstName , LastName){                                                                 //
    console.log(arguments); // array like objects not array it have a properties like indexing and length   //                  
    let myVar = "var inside func";                                                                          //      ----function execution scop     
    console.log(myVar);                                                                                     //        
    const fullName = firstName + " " + LastName;                                                            //    
    return fullName;                                                                                        //
} 