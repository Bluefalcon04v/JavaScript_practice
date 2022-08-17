// "Regular Expression" helps us to check if the input string is valid or not
// for this a Regular Expression's method "test()" is used

let emailPattern = new RegExp("(?=.*@)(?=.+.com)");
let emailString = ("Enter email id(someone@xyz.com)");
if(!(emailPattern.test(emailString))){
     console.log("Email Id is invalid! It should contain @ and .com");
} 
else { 
    console.log("Email Id is Valid");
}
