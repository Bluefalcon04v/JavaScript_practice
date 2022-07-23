// About Prototype and Prototype Inheritance

// Prototype when ever we create a "Array", "Object" or "Functions" it will get attach itself to Object which contains several properties which we can call using ArrayName "."
let arr = ["one" ,"two", "three"];
console.log(arr.length);   

let obj1 = {
    name : "Bruce",
    city : "Dehradun",
    Intro : function(){
        console.log(this.name + " from " + this.city);
    }
}

let fun = function() {
    console.log("Hello world");
}


// Prototype Chain
console.log("Array 'Prototype Chain'");
console.log(arr.__proto__);                           // Array.prototype
console.log(arr.__proto__.__proto__);                 // Object.prototype
console.log(arr.__proto__.__proto__.__proto__);       // null 

console.log("Object 'Prototype Chain'");
console.log(obj1.__proto__);                           // Object.prototype
console.log(obj1.__proto__.__proto__);                 // null

console.log("Function 'Prototype Chain'");
console.log(fun.__proto__);                           // Function.prototype
console.log(fun.__proto__.__proto__);                 // Object.prototype
console.log(fun.__proto__.__proto__.__proto__);       // null



// Prototype Inheritance
console.log("Prototype Inheritance");
let obj2 = {
    name : "Captain"
};

obj2.__proto__ = obj1;  // we have Inherite the object "obj1" properties
obj2.Intro();      
console.log(obj2.name);  
console.log(obj2.city);     // If any parameter is not defined it will take the parent value for that prameter as defalt value