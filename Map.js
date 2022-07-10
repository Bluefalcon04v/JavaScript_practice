// Map is Used when we have to represent collection of objects
// Map consists of key and values pairs

let map = new Map();

// .set will update the value insted of keep adding existent values and repeating it
map.set("Bruce", "Python");
map.set("Cap", "C++");
map.set("Dee", "Java Script");

console.log( map.keys());   // getting keys of the Map
console.log( map.values()); // getting values of the Map


// Iterating in the Map
for (let [key, value] of map){
    console.log("printing Map key and values =   " + key," : " ,value);
}

// with FOREACH loop
// let foreach(v, k) => {
//     console.log(k," : " ,v);
// }
