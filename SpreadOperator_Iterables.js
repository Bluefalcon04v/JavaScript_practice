// Spread Operator showed with "..." it help us spreading out the elements of an array to a new variable 


// Spread Operator changes arrays into the list of arrguments 
let arr1 = [2, 14, 8, 5];
console.log(Math.max(...arr1));


// Arrays can be mearged using Spread Operator and we can add some elements in between too
let arr2 = [3, 4, 8];
let mergedArr = [15, ...arr1, 0, ...arr2, 22];
console.log(mergedArr);


// We can Clone arrays with the help of Spread Operator
let arr3 = [1, 3, 6];
let arrCopy = [...arr3];
arrCopy.push(9);
console.log(arr3);
console.log(arrCopy);