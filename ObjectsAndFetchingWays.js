// creating a complex object and fetching data 

let identity = {
    name : 'Niel',
    job : 'developer',
    'work exp' : '3years',
    'device uses' : {
        laptop_brand : 'Asus',
        RAM : '32 Gb', 
        CPU : 'intel i9'
    }
}

console.log(identity.name);                             // fetching data using .
console.log(identity['work exp']);                      // fetching data using [] brackets
console.log(identity['device uses'].laptop_brand);
console.log(identity['device uses'].laptop_brand?.length); 
console.log(identity['device uses']?.laptop_brand2?.length); // use ? to see if that particular key exists or not it won't throw errors 
delete identity['device uses']                          // deleting from an object
console.log(identity);