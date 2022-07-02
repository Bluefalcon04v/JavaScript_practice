// check which number is greater and also check if it's odd or even
let num1 = 13
let num2 = 17
let num3 = 34


if(num1>num2 && num1>num3){
    console.log("num1 is greater\nand");
    if(num1%2==0){
        console.log("num1 is even")
    }
    else{
        console.log("num1 is odd")
    }

}

else if(num2>num3){
    console.log("num2 is greater\nand");
    if(num2%2==0){
        console.log("num2 is even")
    }
    else{
        console.log("num2 is odd")
    }
}
else{
    console.log("num3 is greater\nand");
    console.log(num3)
    if(num3%2==0){
        console.log("num3 is even")
    }
    else{
        console.log("num3 is odd")
    }
}