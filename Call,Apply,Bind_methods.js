let name1 = {
    firstname : "Bruce",
    lastname : "Wyen"
}

let name2 = {
    firstname : "Cap",
    lastname : "Rogers"
}
let fullName = function(hometown, state){
    console.log(this.firstname + " " + this.lastname + " from " + hometown + " " + state);
}


// "CALL method" used to borrowing function 
fullName.call(name1, "Dehradun", "Uttrakhand");  // in call method all other arguments are given indivusally 
fullName.call(name2, "Merrut", "UttarPradesh");


// "APPLY method" in this all other arguments are given as an array list
fullName.apply(name1, ["Dehradun", "Uttrakhand"]);
fullName.apply(name2, ["Merrut", "UttarPradesh"]);


// "BIND method" it will create the copy of the method and give us freedom to call it whenever we want 
let bindmethod1 = fullName.bind(name1, "Dehradun", "Uttrakhand");
console.log(bindmethod1);  // it will show the method it.s binded with
bindmethod1()              // we can directly call the "bind method" after defining it
let bindmethod2 = fullName.bind(name2, "Merrut", "UttarPradesh");
bindmethod2()
