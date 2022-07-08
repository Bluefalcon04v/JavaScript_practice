// Destructuring Arrays 

// Destructuring Arrays with variables
let nums =  [5, 4, 8, 10, 'Float Values'];
let [a, b, c, , e] = nums;
a = 3                                    // Assining 'a' to 3
console.log(a);
console.log(e);

// Destructuring words into Arrays 
let words = "Hello! there 👋 I am a computer".split(' ');   // "spilt" use to destructuring words in Array format 
console.log(words);
let [a2, b2, c2, ...d2 ] = words;         // "..." will assing whole rest of the arrays into one variable
console.log(d2);
d2[1] = 4                                 // Assining new values in d2
console.log(d2);