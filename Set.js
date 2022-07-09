// SET and it's Methods 
// "Arrays" in arrays it can have "Same values" and it stores data in ordered list.
// "Set" it only stores 'UNIQUE VALUES' and in other languages Set stores data in "unordered way" but in JS it stores data in "ORDERED LIST"

let nums = new Set("Hello!! 👋")
console.log(nums);

nums.add(33)       // to insert values in SET
nums.add("😀")
console.log(nums);

// to iterate values of set 
nums.forEach(i=> {
    console.log("iterating in Set: " + i);
})

console.log("To Checking if Set contains H :" + nums.has('H'));
console.log("To Checking if Set contains h :" + nums.has('h'));
console.log("To Checking if Set contains 😀 :" + nums.has('😀'));