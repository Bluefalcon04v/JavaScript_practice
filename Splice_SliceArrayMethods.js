// Splice() is used to change the content of an Array by Inserting, Removing, and Replacing elements.

let myArray = ["Sam", "Bruce", "Andrew", "Arrisa", "Captain" ];
//SYNTAX splice(Index, Number Of items to Delete, New Elements to Add)
myArray.splice(2, 1, "New Element"); 
console.log(myArray);


// Slice() is used to Return a new Array by copying it to all items from start to end 
let array = ["Red", "Blue", "Green", "Yellow"];
console.log(array.slice(1, 3));  // SYNTAX slice(Starting from index, Ending to index)
console.log(array);