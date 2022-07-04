// one by one print the numbers in reverse order

let num = 12345

while(num>0){
    console.log(num%10);          //this will give remainder ie.(5, 4, 3, 2, 1)
    num = parseInt(num/10)        //it will reduce it size to print next remainder 1234.5 
                                  // and praseInt will change float into Integer ie 1234                         
}