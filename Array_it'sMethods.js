// Creating Arrays and Fetching data from it, Arrays Methods
// "Arrays" in arrays it can Stores "Same values" and it stores data in ordered list ie. we can use INDEX values to call them

let values = [2, , 4, 'Hello', {tech:'javaScript'}, function(){console.log("i love JS");}];
console.log(values);
console.log(values[4]);      
values[5]();             // calling function in array


// Array Methods
console.log("Arrays Methods");
values.pop();              // to remove last element from array
console.log(values);
values.shift();            // to remove element at the start
console.log(values);
values.push(9, 6, 4)          // to push element in array at last place
console.log(values);
values.unshift(3, 10)         // to push element in array at first place
console.log(values);
console.log(values.length);    // to check the length of the array
