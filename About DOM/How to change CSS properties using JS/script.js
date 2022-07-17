// to change the CSS properties using JS 

const heading = document.getElementById('heading').style.color = 'yellow';     // this is Inline Styling and it will only select one element at a time


// To select multiple elements for styling we need to use "FOR LOOP"
const classlist = document.querySelectorAll('.list-items');
for (i = 0; i < classlist.length; i++){
    classlist[i].style.color = 'rgb(140 248 145)';
    classlist[i].style.fontSize = '30px';  // in JS "-" is not used so we use Camel case Instead of "-"
}
