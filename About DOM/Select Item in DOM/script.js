// Methods to select the elements in DOM 

// getElementById() in this we can select elements using their Id
const container = document.getElementById('heading');
console.log(container);

// getElementByClassName() in this we can select elements using their Class name
const listItems = document.getElementsByClassName('list-items');
console.log(listItems);

// getElementByTagName() in this we can select elements using their Tag name
const tagName = document.getElementsByTagName('h2');
console.log(tagName);

// querySelector() in this it can take any parameters without mentioning them just by using particular symbols like "# for id" and ". for class", but it will only return the first occurence of particular elements.
const listItems2 = document.querySelector('ul');
console.log(listItems2);


// querySelectorAll() it's same as querySelector() but it will only return the All occurence of particular elements.
const listItems3 = document.querySelectorAll('ul');
console.log(listItems3);