// Creating "functions" and "Arrow Functions"


// First way of defining the function
function greet(name){                                 // defining function 'greet' and it take a parameter 'name' 
    console.log(`Hello ${name}`);
}
greet('Niel')                                         // Calling the function



// Second way of defining the function
let greet2 = function(name){                         // we have assigned the function with a variable "greet2"
    console.log(`Hello ${name}`);
}
greet2('Sam')



// Third way of defining the function ie. Arrow function
let greet3 = (name) => {                              // we have assigned the Arrow function with a variable "greet3"
    console.log(`Hello ${name}`);
}
greet3('Bruce')                                       // calling our variable/greet3 function

