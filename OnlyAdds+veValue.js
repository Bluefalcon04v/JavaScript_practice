//  In this Function will only adds up +ve values

let PositiveAdder = (num1,num2) => {
    if(num1 && num2 >= 0){
        console.log(num1 + num2);
    }
    else{
        console.log("it's negative vlues please give positive values only");
    }
}

PositiveAdder(5 , 10);