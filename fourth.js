// num1=12345 assign it in reverse order using "while loop" as num2=54321

let num1 = 12345
let num2 = ""

while(num1>0){
    num = num1%10;
    num1 = parseInt(num1/10)
    num2 = num2 + num
}
console.log(num2);