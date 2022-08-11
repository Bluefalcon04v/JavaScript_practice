// due to hoisting the variable and function declearation wherever they are present throughout the program gets lifted and declared to the top of the program


// this is how we noramally defined Functions and Variables
function getCalled(){
    console.log("Calling a function ");
}

var variable = 7;
console.log(variable);
getCalled();


// but if we change the positions of declearations 
console.log(variable2);                              //undefined
getCalled2();                                        // Calling a function
function getCalled2(){
    console.log("Calling a function ");
}
var variable2 = 7;
// it's happening because "variables" get defined in memory allocations as a "undefined" even before running the code, but "functions" will get assigned completely as it is. 


// but if we assigned function as a variable or arrow function
getCalled3();                                        // error it is not a function
getCalled4();                                        // error it is not a function
var getCalled3 = function(){
   console.log("Calling a function ");
}
var getCalled4 = () => {
    console.log("Calling a function ");
}