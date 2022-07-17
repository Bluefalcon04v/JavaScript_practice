// it's about how can we traverse in DOM using JS (ie. Parent, Child, Sibling traversal)



// Parent Node traversal  
console.log("About Parent node");
let ul = document.querySelector('ul');
console.log(ul.parentNode);
console.log(ul.parentElement);

// to check the grand parent Node of ul
console.log(ul.parentNode.parentNode);

// now what is the difference between parentNode and parentElement 
let  html = document.documentElement;
console.log(`parentNode = ${html.parentNode}`);        // it will return "#document" 
console.log(`parentElement = ${html.parentElement}`);     // it will return "null"
// they both are same just difference comes when a node's Parent Node is not an element. If so, parentElement is null



// Child Node traversal
console.log("About Child node method 1");
let ul2 = document.querySelector('ul');
console.log(ul2.childNodes);   // it will also include the space indentation as a child Nodes
console.log(ul2.firstChild);
console.log(ul2.lastChild);

// we can use index numbers to get child nodes
console.log(ul2.childNodes[3]); 

// to style the child Node
console.log(ul2.childNodes[3].style.backgroundColor = 'green'); 

// to select the child nodes we can also use 
console.log("About Child node method 2");
console.log(ul2.children); // in this it won't count space indentation as a child Nodes
console.log(ul2.firstElementChild); // in this first and last element child node will work perfectly
console.log(ul2.lastElementChild);
console.log(ul2.children[3]);



// Sibling Node traversal 
console.log("About Sibling node ");
console.log(ul2.nextSibling);       // it will consider space indentation as a Sibling Nodes
console.log(ul2.previousSibling);
// 2nd method to get Sibling nodes
console.log(ul2.previousElementSibling.style.backgroundColor = 'gold');
console.log(ul2.nextElementSibling);