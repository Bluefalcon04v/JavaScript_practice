// Creating Element using JS and seting attributes too

const ul = document.querySelector('ul');  // we have selected where we want to create new element

const para = document.createElement('p');  // we have created a <p> in "ul"
ul.append(para);                           // we have appended it in "ul"


// now we are adding text in newly added para
para.innerText = 'New Paragraph'


// now setting the same attribute in newly added para
para.setAttribute('class','list-items');
// to remove attributes 
// para.removeAttribute('class');


// how to get the attribute of particular element
const heading = document.querySelector('#heading');
console.log(heading.getAttribute('div'));
console.log(heading.getAttribute('id'));
console.log(heading.getAttribute('class'));


// to set class in an element we can also use this method
para.classList.add('new-para');
console.log(para.classList.contains('new-para'));  // checking if new class is added or not
