// print the numbers between 1 to 100 which are divisible by 13 using for loop and wwhile loop

console.log("using for loop");
for(let i=1; i<=100; i++){
    if(i%13===0)
    console.log(i);
}

console.log("using while loop");
let j = 1
while(j<=100){
    if(j%13===0)
        console.log(j);
    j++
}