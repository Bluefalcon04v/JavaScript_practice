// Adding Event Listener using JS
const box2  = document.querySelector('#btn2'); 
function Btn2(){
    alert("Box 2 Event is called")
}; 
box2.addEventListener("click", Btn2);    // addEventListener will take 3 parametes ie (event, function(), boolean value)
// boolean Value defines Event Propagation 