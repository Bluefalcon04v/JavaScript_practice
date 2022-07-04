// fetching data by using "for in loop" 

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

console.log("printing key of identity");
for(let i in identity){
    console.log(i);
}

console.log("\nprinting key and value of identity");
for(let i in identity){
    console.log(i, identity[i]);
}

console.log("\nprinting key and value of device uses");
for(let i in identity['device uses']){
    console.log(i, identity['device uses'][i]);
}
