// "ForEach" loop will operate on whole Array and it makes ForEach loop slow. 
// So here the other methods come into play ie. Filter, Map and Reduce 

let nums = [2,1, 3, 4, 18, 33, 3];
// print the numbers which are even 
nums.filter(n => n % 2 ===0)   // filter will just take out the values according to the function mention for it and it wall save time of excution 
    .forEach(n => {
        console.log(n);
    })

let nums2 = [3, 5, 6, 7, 8, 21];
let result = nums2.filter(n => n % 2 ===0)  
    .map(n => n * 2)               // .map will take the function and work on it
    .reduce((a,b) => a + b)        // .reduce will reduce the result into one value 
console.log("num2 result " + result);