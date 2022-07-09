// Creating Arrays and Fetching data from it, Arrays Methods
// "Arrays" in arrays it can have "Same values" and it stores data in ordered list.

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
values.splice(2, 3, 'Hey', 'Bye');  // '2' indicates index value, '3' indicates number of values to remove, rest will be replacing the removed values
console.log(values);