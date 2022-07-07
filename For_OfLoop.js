// difference between "For Of loop" and "For In loop" in Arrays

let nums = []
nums[0] = 5;
nums[5] = 25;
nums[10] = 35;

console.log("printing nums(Values) by 'FOR OF loop'");   
for(let n of nums){   // FOR OF loop gives us both info it's index and it's value in single loop
    console.log(n);
}

console.log("printing nums(index) by 'FOR IN loop'");
for(let n in nums){   
    console.log(n);   // it will print the Index on which Array have values
}

console.log("printing nums(values) by 'FOR IN loop'");
for(let n in nums){ 
    console.log(nums[n]);  // it will print the values of Arrays 
}