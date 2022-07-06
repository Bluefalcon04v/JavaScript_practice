// Creating Methods 

// method:- it's same as functions it just be inside an object and gives it some behaviour properties that's why it is called as methods

let laptop = {                 // this is an object
    brand : 'Asus',
    cpu : 'i9',
    ram : '16 Gb',

    greet : function(){        // here greet function gives object greet a behaviour property ie why it's an method
        console.log('Hello User!!');
    }
}

laptop.greet()                 // calling out for method
console.log(laptop.brand);