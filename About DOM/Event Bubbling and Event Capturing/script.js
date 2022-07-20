//Event Propagation is consists of two types 
// Event Bubbling and Event Capturing

// Event Bubbling In this the calls are made from inside towards out 
// querySelector takes three arguments 1st Events, 2nd function, 3rd Event propagation
// Event Propagation (un-mentioned/False means Event Bubbling,
// true means Event Capturing)

// Event Bubbling
// document.querySelector('#grandParent').addEventListener('click', () => {
//     console.log("Grand Parent is clicked");
// }, false)

// document.querySelector('#parent').addEventListener('click', () => {
//     console.log("Parent is clicked");
// }, false)

// document.querySelector('#child').addEventListener('click', () => {
//     console.log("Child is clicked");
// }, false)

// Event Capturing
document.querySelector('#grandParent').addEventListener('click', () => {
    console.log("Grand Parent is clicked");
}, true)

document.querySelector('#parent').addEventListener('click', (e) => {
    console.log("Parent is clicked");
    e.stopPropagation();
}, true)

document.querySelector('#child').addEventListener('click', () => {
    console.log("Child is clicked");
}, true)

// Note "if you want to notice difference just comment out one type before running it"

// Now to stop the Propagation of Events We can use Inbuild method with the help of "Event Object 'e'" 
// and in build function "e.stopPropagation()"